import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import bigDecimal from 'js-big-decimal'
import * as ANTLR from './antlr'
import empty from 'ramda/es/empty'

interface stack {
    type: string,
    path: any[],
    data: any,
}

export class TaskListVisitor extends AbstractParseTreeVisitor<object> implements ANTLR.ARCVisitor<object> {
    private atom(_: any) {
        return { type: 'value', path: [], data: _ }
    }
    defaultResult() {
        //console.warn('⚠️  Unreachable!')
        return { type: 'error' }
    }
    visitProgram(ctx: ANTLR.ProgramContext) {
        let tasks: object[] = []
        for (let i = 1; i < ctx.childCount; i++) {
            tasks = tasks.concat(this.visit(ctx.getChild(i - 1)))
        }
        return tasks.filter((o: any) => o.type != 'empty')
    }
    visitEmptyStatement(ctx: ANTLR.EmptyStatementContext) {
        return { type: 'empty' }
    }



    /* Statement: Assign */
    visitAtomAssign(ctx: ANTLR.AtomAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        //console.log('AssignLHS: ' + lhs.join('.'))
        //console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        return {
            type: 'record',
            path: lhs,
            data: rhs.data
        }
    }


    visitDictAssign(ctx: ANTLR.DictAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        console.log('AssignLHS: ' + lhs.join('.'))
        console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        function merge(o: any) {
            /*
            switch (o.type) {
                case 'empty': return
                case 'value':
                case 'record':
            }
            */
            return {
                type: 'record',
                path: lhs.concat(o.path),
                data: o.data
            }
        }
        return rhs.filter((o: any) => o.type != 'empty').map(merge)
    }


    visitDictStatement(ctx: ANTLR.DictStatementContext) {
        let element: object[] = []
        const count = ctx.statement().length
        if (count == 0) {
            return [this.atom(element)]
        }
        for (let i = 0; i < count; i++) {
            const v: any = this.visit(ctx.statement(i))
            //console.log(`Record: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        //console.log(`Dict: ${JSON.stringify(element, null, 4)}`)
        return element
    }


    /* Node: Key */
    visitKey(ctx: ANTLR.KeyContext) {
        let element: object[] = []
        for (let i = 0; i < ctx.symbol().length; i++) {
            const v = this.visit(ctx.symbol(i))
            //console.log(`Key: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        //console.log(`Keys: ${JSON.stringify(element, null, 4)}`)
        return element
    }


    /* MixedNode: Symbol */
    visitSymbol(ctx: ANTLR.SymbolContext) {
        const v: any = this.visit(ctx.getChild(0))
        let e: any = v.data
        if (e === undefined) {
            e = ctx.text
        }
        //console.log(`Symbol: ${JSON.stringify(e, null, 4)}`)
        return [e]
    }


    /* Atom: String */
    visitStringEmpty(ctx: ANTLR.StringEmptyContext) {
        //console.log('Empty: EmptyString!')
        return this.atom('')
    }
    visitStringLiteralSingle(ctx: ANTLR.StringLiteralSingleContext) {
        const s = JSON.stringify(ctx.text).slice(2, -2)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringLiteralBlock(ctx: ANTLR.StringLiteralBlockContext) {
        const s = JSON.stringify(ctx.text).slice(4, -4)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringEscapeSingle(ctx: ANTLR.StringEscapeSingleContext) {
        const s = ctx.text.slice(1, -1)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringEscapeBlock(ctx: ANTLR.StringEscapeBlockContext) {
        const s = ctx.text.slice(3, -3)
        //console.log('String: ' + s)
        return this.atom(s)
    }


    /* Atom: Integer */
    visitIntegerLiteral(ctx: ANTLR.IntegerLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Integer: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(parseInt(ctx.text))
    }


    /* Atom: Decimal */
    visitDecimalLiteral(ctx: ANTLR.DecimalLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(parseFloat(ctx.text))
    }
    visitDecimalZero(ctx: ANTLR.DecimalZeroContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(i)
    }


    /* Atom: SpecialValue */
    visitSpecialID(ctx: ANTLR.SpecialIDContext) {
        let s: any = ctx.text.toLowerCase()
        //console.log('Special: ' + s)
        const jump: any = {
            null: null,
            true: true,
            false: false,
            infinity: Infinity,
            nan: NaN,
            undefined: undefined,
        }
        if (!jump.hasOwnProperty(s)) {
            console.warn('⚠️  Unknow Value: ' + s + ', return null')
            return this.atom(null)
        }
        else {
            return this.atom(jump[s])
        }
    }
}