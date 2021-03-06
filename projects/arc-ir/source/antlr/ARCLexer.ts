// Generated from ../../node_modules/@nyar/arc-antlr/ARC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { CharStream } from 'antlr4ts/CharStream'
import { Lexer } from 'antlr4ts/Lexer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import * as Utils from 'antlr4ts/misc/Utils'


export class ARCLexer extends Lexer {
    public static readonly T__0 = 1
    public static readonly T__1 = 2
    public static readonly T__2 = 3
    public static readonly T__3 = 4
    public static readonly T__4 = 5
    public static readonly T__5 = 6
    public static readonly T__6 = 7
    public static readonly T__7 = 8
    public static readonly T__8 = 9
    public static readonly T__9 = 10
    public static readonly T__10 = 11
    public static readonly T__11 = 12
    public static readonly T__12 = 13
    public static readonly T__13 = 14
    public static readonly T__14 = 15
    public static readonly T__15 = 16
    public static readonly T__16 = 17
    public static readonly T__17 = 18
    public static readonly Assign = 19
    public static readonly Semicolon = 20
    public static readonly Comma = 21
    public static readonly Dot = 22
    public static readonly Identifier = 23
    public static readonly Integer = 24
    public static readonly Underline = 25
    public static readonly Sign = 26
    public static readonly StringEscapeBlock = 27
    public static readonly StringEscapeSingle = 28
    public static readonly StringLiteralBlock = 29
    public static readonly StringLiteralSingle = 30
    public static readonly NewLine = 31
    public static readonly MacroEscape = 32
    public static readonly LineComment = 33
    public static readonly PartComment = 34
    public static readonly WhiteSpace = 35

    // tslint:disable:no-trailing-whitespace
    public static readonly channelNames: string[] = [
        'DEFAULT_TOKEN_CHANNEL', 'HIDDEN',
    ]

    // tslint:disable:no-trailing-whitespace
    public static readonly modeNames: string[] = [
        'DEFAULT_MODE',
    ]

    public static readonly ruleNames: string[] = [
        'T__0', 'T__1', 'T__2', 'T__3', 'T__4', 'T__5', 'T__6', 'T__7', 'T__8', 
        'T__9', 'T__10', 'T__11', 'T__12', 'T__13', 'T__14', 'T__15', 'T__16', 
        'T__17', 'Assign', 'Semicolon', 'Comma', 'Dot', 'Equal', 'Colon', 'Identifier', 
        'Integer', 'Underline', 'Sign', 'Digit', 'Digits', 'OCT', 'HEX', 'Letter', 
        'EmojiCharacter', 'NameCharacter', 'NameStartCharacter', 'StringEscapeBlock', 
        'StringEscapeSingle', 'StringLiteralBlock', 'StringLiteralSingle', 'NewLine', 
        'CharLevel1', 'CharLevel2', 'UTF8', 'UTF16', 'NonEscape', 'MacroEscape', 
        'LineComment', 'PartComment', 'WhiteSpace', 'Sharp', 'Comment', 'UnicodeWhiteSpace',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, "'/'", "'\"\"\"'", "'''''", "'\"'", "'''", "'@'", "'`'", "'$'", 
        "'['", "']'", "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'*'", "'&'", 
        undefined, "';'", "','", "'.'", undefined, undefined, "'_'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, 'Assign', 'Semicolon', 
        'Comma', 'Dot', 'Identifier', 'Integer', 'Underline', 'Sign', 'StringEscapeBlock', 
        'StringEscapeSingle', 'StringLiteralBlock', 'StringLiteralSingle', 'NewLine', 
        'MacroEscape', 'LineComment', 'PartComment', 'WhiteSpace',
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ARCLexer._LITERAL_NAMES, ARCLexer._SYMBOLIC_NAMES, [])

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return ARCLexer.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace


    constructor(input: CharStream) {
        super(input)
        this._interp = new LexerATNSimulator(ARCLexer._ATN, this)
    }

    // @Override
    public get grammarFileName(): string { return 'ARC.g4' }

    // @Override
    public get ruleNames(): string[] { return ARCLexer.ruleNames }

    // @Override
    public get serializedATN(): string { return ARCLexer._serializedATN }

    // @Override
    public get channelNames(): string[] { return ARCLexer.channelNames }

    // @Override
    public get modeNames(): string[] { return ARCLexer.modeNames }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02%\u0154\b\x01' +
        '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
        '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
        '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
        '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
        '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
        '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
        '4\t4\x045\t5\x046\t6\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03' +
        '\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r' +
        '\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11' +
        '\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\x98\n\x14\x03' +
        '\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03' +
        '\x19\x03\x1A\x03\x1A\x07\x1A\xA6\n\x1A\f\x1A\x0E\x1A\xA9\v\x1A\x03\x1B' +
        '\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xAF\n\x1B\f\x1B\x0E\x1B\xB2\v\x1B\x03' +
        '\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x06\x1F\xBB\n\x1F' +
        '\r\x1F\x0E\x1F\xBC\x03 \x03 \x03!\x03!\x03"\x03"\x03#\x03#\x03$\x03' +
        '$\x05$\xC9\n$\x03%\x03%\x03%\x05%\xCE\n%\x03&\x03&\x03&\x03&\x03&\x06' +
        "&\xD5\n&\r&\x0E&\xD6\x03&\x03&\x03&\x03&\x03\'\x03\'\x06\'\xDF\n\'\r\'" +
        "\x0E\'\xE0\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
        ')\x03)\x06)\xF0\n)\r)\x0E)\xF1\x03)\x03)\x03*\x05*\xF7\n*\x03*\x03*\x06' +
        '*\xFB\n*\r*\x0E*\xFC\x03*\x03*\x03+\x03+\x03+\x03+\x05+\u0105\n+\x03+' +
        '\x05+\u0108\n+\x03,\x03,\x03,\x03,\x05,\u010E\n,\x03,\x05,\u0111\n,\x03' +
        '-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03' +
        '.\x03.\x03/\x06/\u0124\n/\r/\x0E/\u0125\x030\x030\x030\x030\x060\u012C' +
        '\n0\r0\x0E0\u012D\x030\x030\x031\x031\x071\u0134\n1\f1\x0E1\u0137\v1\x03' +
        '1\x031\x032\x032\x072\u013D\n2\f2\x0E2\u0140\v2\x032\x032\x032\x032\x03' +
        '3\x063\u0147\n3\r3\x0E3\u0148\x033\x033\x034\x034\x035\x035\x035\x035' +
        '\x036\x036\b\xD6\xE0\xF1\u0125\u012D\u013E\x02\x027\x03\x02\x03\x05\x02' +
        '\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02' +
        '\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11' +
        "!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02" +
        '\x021\x02\x023\x02\x195\x02\x1A7\x02\x1B9\x02\x1C;\x02\x02=\x02\x02?\x02' +
        '\x02A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x1DM\x02\x1EO\x02' +
        '\x1FQ\x02 S\x02!U\x02\x02W\x02\x02Y\x02\x02[\x02\x02]\x02\x02_\x02"a' +
        '\x02#c\x02$e\x02%g\x02\x02i\x02\x02k\x02\x02\x03\x02\x0F\x04\x02--//\x03' +
        '\x022;\x03\x0229\x05\x022;CHch\x04\x02C\\c|\x03\x02))\n\x02$$12^^ddhh' +
        'ppttvv\x03\x02^^\x04\x02$$^^\x03\x02\x03\x03\x03\x02bb\x04\x02\f\f\x0F' +
        '\x0F\f\x02\v\x0F""\x87\x87\xA2\xA2\u1682\u1682\u2002\u200C\u202A\u202B' +
        '\u2031\u2031\u2061\u2061\u3002\u3002\x04\x95\x02%\x02%\x02,\x02,\x022' +
        '\x02;\x02\xAB\x02\xAB\x02\xB0\x02\xB0\x02\u203E\x02\u203E\x02\u204B\x02' +
        '\u204B\x02\u2124\x02\u2124\x02\u213B\x02\u213B\x02\u2196\x02\u219B\x02' +
        '\u21AB\x02\u21AC\x02\u231C\x02\u231D\x02\u232A\x02\u232A\x02\u23D1\x02' +
        '\u23D1\x02\u23EB\x02\u23F5\x02\u23FA\x02\u23FC\x02\u24C4\x02\u24C4\x02' +
        '\u25AC\x02\u25AD\x02\u25B8\x02\u25B8\x02\u25C2\x02\u25C2\x02\u25FD\x02' +
        '\u2600\x02\u2602\x02\u2606\x02\u2610\x02\u2610\x02\u2613\x02\u2613\x02' +
        '\u2616\x02\u2617\x02\u261A\x02\u261A\x02\u261F\x02\u261F\x02\u2622\x02' +
        '\u2622\x02\u2624\x02\u2625\x02\u2628\x02\u2628\x02\u262C\x02\u262C\x02' +
        '\u2630\x02\u2631\x02\u263A\x02\u263C\x02\u2642\x02\u2642\x02\u2644\x02' +
        '\u2644\x02\u264A\x02\u2655\x02\u2662\x02\u2662\x02\u2665\x02\u2665\x02' +
        '\u2667\x02\u2668\x02\u266A\x02\u266A\x02\u267D\x02\u267D\x02\u2681\x02' +
        '\u2681\x02\u2694\x02\u2699\x02\u269B\x02\u269B\x02\u269D\x02\u269E\x02' +
        '\u26A2\x02\u26A3\x02\u26AC\x02\u26AD\x02\u26B2\x02\u26B3\x02\u26BF\x02' +
        '\u26C0\x02\u26C6\x02\u26C7\x02\u26CA\x02\u26CA\x02\u26D0\x02\u26D1\x02' +
        '\u26D3\x02\u26D3\x02\u26D5\x02\u26D6\x02\u26EB\x02\u26EC\x02\u26F2\x02' +
        '\u26F7\x02\u26F9\x02\u26FC\x02\u26FF\x02\u26FF\x02\u2704\x02\u2704\x02' +
        '\u2707\x02\u2707\x02\u270A\x02\u270F\x02\u2711\x02\u2711\x02\u2714\x02' +
        '\u2714\x02\u2716\x02\u2716\x02\u2718\x02\u2718\x02\u271F\x02\u271F\x02' +
        '\u2723\x02\u2723\x02\u272A\x02\u272A\x02\u2735\x02\u2736\x02\u2746\x02' +
        '\u2746\x02\u2749\x02\u2749\x02\u274E\x02\u274E\x02\u2750\x02\u2750\x02' +
        '\u2755\x02\u2757\x02\u2759\x02\u2759\x02\u2765\x02\u2766\x02\u2797\x02' +
        '\u2799\x02\u27A3\x02\u27A3\x02\u27B2\x02\u27B2\x02\u27C1\x02\u27C1\x02' +
        '\u2936\x02\u2937\x02\u2B07\x02\u2B09\x02\u2B1D\x02\u2B1E\x02\u2B52\x02' +
        '\u2B52\x02\u2B57\x02\u2B57\x02\u3032\x02\u3032\x02\u303F\x02\u303F\x02' +
        '\u3299\x02\u3299\x02\u329B\x02\u329B\x02\uF006\x03\uF006\x03\uF0D1\x03' +
        '\uF0D1\x03\uF172\x03\uF173\x03\uF180\x03\uF181\x03\uF190\x03\uF190\x03' +
        '\uF193\x03\uF19C\x03\uF1E8\x03\uF201\x03\uF203\x03\uF204\x03\uF21C\x03' +
        '\uF21C\x03\uF231\x03\uF231\x03\uF234\x03\uF23C\x03\uF252\x03\uF253\x03' +
        '\uF302\x03\uF323\x03\uF326\x03\uF395\x03\uF398\x03\uF399\x03\uF39B\x03' +
        '\uF39D\x03\uF3A0\x03\uF3F2\x03\uF3F5\x03\uF3F7\x03\uF3F9\x03\uF4FF\x03' +
        '\uF501\x03\uF53F\x03\uF54B\x03\uF550\x03\uF552\x03\uF569\x03\uF571\x03' +
        '\uF572\x03\uF575\x03\uF57C\x03\uF589\x03\uF589\x03\uF58C\x03\uF58F\x03' +
        '\uF592\x03\uF592\x03\uF597\x03\uF598\x03\uF5A6\x03\uF5A7\x03\uF5AA\x03' +
        '\uF5AA\x03\uF5B3\x03\uF5B4\x03\uF5BE\x03\uF5BE\x03\uF5C4\x03\uF5C6\x03' +
        '\uF5D3\x03\uF5D5\x03\uF5DE\x03\uF5E0\x03\uF5E3\x03\uF5E3\x03\uF5E5\x03' +
        '\uF5E5\x03\uF5EA\x03\uF5EA\x03\uF5F1\x03\uF5F1\x03\uF5F5\x03\uF5F5\x03' +
        '\uF5FC\x03\uF651\x03\uF682\x03\uF6C7\x03\uF6CD\x03\uF6D4\x03\uF6E2\x03' +
        '\uF6E7\x03\uF6EB\x03\uF6EB\x03\uF6ED\x03\uF6EE\x03\uF6F2\x03\uF6F2\x03' +
        '\uF6F5\x03\uF6F8\x03\uF912\x03\uF920\x03\uF922\x03\uF929\x03\uF932\x03' +
        '\uF932\x03\uF935\x03\uF93C\x03\uF93E\x03\uF940\x03\uF942\x03\uF947\x03' +
        '\uF949\x03\uF94D\x03\uF952\x03\uF960\x03\uF982\x03\uF993\x03\uF9C2\x03' +
        '\uF9C2\x03X\x02C\x02\\\x02c\x02|\x02\xAC\x02\xAC\x02\xBC\x02\xBC\x02\xC2' +
        '\x02\xD8\x02\xDA\x02\xF8\x02\xFA\x02\u02BA\x02\u02E2\x02\u02E6\x02\u0372' +
        '\x02\u0375\x02\u0377\x02\u0379\x02\u037C\x02\u037F\x02\u0381\x02\u0381' +
        '\x02\u0386\x02\u0386\x02\u0388\x02\u0388\x02\u038A\x02\u038C\x02\u038E' +
        '\x02\u038E\x02\u0390\x02\u03A3\x02\u03A5\x02\u03E3\x02\u03F2\x02\u0401' +
        '\x02\u1D02\x02\u1D2C\x02\u1D2E\x02\u1D79\x02\u1D7B\x02\u1DC1\x02\u1E02' +
        '\x02\u1F17\x02\u1F1A\x02\u1F1F\x02\u1F22\x02\u1F47\x02\u1F4A\x02\u1F4F' +
        '\x02\u1F52\x02\u1F59\x02\u1F5B\x02\u1F5B\x02\u1F5D\x02\u1F5D\x02\u1F5F' +
        '\x02\u1F5F\x02\u1F61\x02\u1F7F\x02\u1F82\x02\u1FB6\x02\u1FB8\x02\u1FC6' +
        '\x02\u1FC8\x02\u1FD5\x02\u1FD8\x02\u1FDD\x02\u1FDF\x02\u1FF1\x02\u1FF4' +
        '\x02\u1FF6\x02\u1FF8\x02\u2000\x02\u2073\x02\u2073\x02\u2081\x02\u2081' +
        '\x02\u2092\x02\u209E\x02\u2128\x02\u2128\x02\u212C\x02\u212D\x02\u2134' +
        '\x02\u2134\x02\u2150\x02\u2150\x02\u2162\x02\u218A\x02\u2C62\x02\u2C81' +
        '\x02\u2E82\x02\u2E9B\x02\u2E9D\x02\u2EF5\x02\u2F02\x02\u2FD7\x02\u3007' +
        '\x02\u3007\x02\u3009\x02\u3009\x02\u3023\x02\u302B\x02\u303A\x02\u303D' +
        '\x02\u3043\x02\u3098\x02\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02\u30FF' +
        '\x02\u3101\x02\u31F2\x02\u3201\x02\u32D2\x02\u3300\x02\u3302\x02\u3359' +
        '\x02\u3402\x02\u4DB7\x02\u4E02\x02\u9FD7\x02\uA724\x02\uA789\x02\uA78D' +
        '\x02\uA7B0\x02\uA7B2\x02\uA7B9\x02\uA7F9\x02\uA801\x02\uAB32\x02\uAB5C' +
        '\x02\uAB5E\x02\uAB67\x02\uF902\x02\uFA6F\x02\uFA72\x02\uFADB\x02\uFB02' +
        '\x02\uFB08\x02\uFF23\x02\uFF3C\x02\uFF43\x02\uFF5C\x02\uFF68\x02\uFF71' +
        '\x02\uFF73\x02\uFF9F\x02\u0142\x03\u0190\x03\u01A2\x03\u01A2\x03\uB002' +
        '\x03\uB003\x03\uD202\x03\uD247\x03\uF202\x03\uF202\x03\x02\x04\uA6D8\x04' +
        '\uA702\x04\uB736\x04\uB742\x04\uB81F\x04\uB822\x04\uCEA3\x04\uF802\x04' +
        '\uFA1F\x04\u015A\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07' +
        '\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03' +
        '\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03' +
        '\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03' +
        '\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03' +
        '\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02' +
        "\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02" +
        '-\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02' +
        '\x02\x02\x029\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02' +
        '\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02_\x03' +
        '\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02' +
        '\x02\x03m\x03\x02\x02\x02\x05o\x03\x02\x02\x02\x07s\x03\x02\x02\x02\t' +
        'w\x03\x02\x02\x02\vy\x03\x02\x02\x02\r{\x03\x02\x02\x02\x0F}\x03\x02\x02' +
        '\x02\x11\x7F\x03\x02\x02\x02\x13\x81\x03\x02\x02\x02\x15\x83\x03\x02\x02' +
        '\x02\x17\x85\x03\x02\x02\x02\x19\x87\x03\x02\x02\x02\x1B\x89\x03\x02\x02' +
        '\x02\x1D\x8B\x03\x02\x02\x02\x1F\x8D\x03\x02\x02\x02!\x8F\x03\x02\x02' +
        "\x02#\x91\x03\x02\x02\x02%\x93\x03\x02\x02\x02\'\x97\x03\x02\x02\x02)" +
        '\x99\x03\x02\x02\x02+\x9B\x03\x02\x02\x02-\x9D\x03\x02\x02\x02/\x9F\x03' +
        '\x02\x02\x021\xA1\x03\x02\x02\x023\xA3\x03\x02\x02\x025\xAA\x03\x02\x02' +
        '\x027\xB3\x03\x02\x02\x029\xB5\x03\x02\x02\x02;\xB7\x03\x02\x02\x02=\xBA' +
        '\x03\x02\x02\x02?\xBE\x03\x02\x02\x02A\xC0\x03\x02\x02\x02C\xC2\x03\x02' +
        '\x02\x02E\xC4\x03\x02\x02\x02G\xC8\x03\x02\x02\x02I\xCD\x03\x02\x02\x02' +
        'K\xCF\x03\x02\x02\x02M\xDC\x03\x02\x02\x02O\xE4\x03\x02\x02\x02Q\xED\x03' +
        '\x02\x02\x02S\xFA\x03\x02\x02\x02U\u0107\x03\x02\x02\x02W\u0110\x03\x02' +
        '\x02\x02Y\u0112\x03\x02\x02\x02[\u0118\x03\x02\x02\x02]\u0123\x03\x02' +
        '\x02\x02_\u0127\x03\x02\x02\x02a\u0131\x03\x02\x02\x02c\u013A\x03\x02' +
        '\x02\x02e\u0146\x03\x02\x02\x02g\u014C\x03\x02\x02\x02i\u014E\x03\x02' +
        '\x02\x02k\u0152\x03\x02\x02\x02mn\x071\x02\x02n\x04\x03\x02\x02\x02op' +
        '\x07$\x02\x02pq\x07$\x02\x02qr\x07$\x02\x02r\x06\x03\x02\x02\x02st\x07' +
        ')\x02\x02tu\x07)\x02\x02uv\x07)\x02\x02v\b\x03\x02\x02\x02wx\x07$\x02' +
        '\x02x\n\x03\x02\x02\x02yz\x07)\x02\x02z\f\x03\x02\x02\x02{|\x07B\x02\x02' +
        '|\x0E\x03\x02\x02\x02}~\x07b\x02\x02~\x10\x03\x02\x02\x02\x7F\x80\x07' +
        '&\x02\x02\x80\x12\x03\x02\x02\x02\x81\x82\x07]\x02\x02\x82\x14\x03\x02' +
        '\x02\x02\x83\x84\x07_\x02\x02\x84\x16\x03\x02\x02\x02\x85\x86\x07}\x02' +
        '\x02\x86\x18\x03\x02\x02\x02\x87\x88\x07\x7F\x02\x02\x88\x1A\x03\x02\x02' +
        '\x02\x89\x8A\x07*\x02\x02\x8A\x1C\x03\x02\x02\x02\x8B\x8C\x07+\x02\x02' +
        '\x8C\x1E\x03\x02\x02\x02\x8D\x8E\x07>\x02\x02\x8E \x03\x02\x02\x02\x8F' +
        '\x90\x07@\x02\x02\x90"\x03\x02\x02\x02\x91\x92\x07,\x02\x02\x92$\x03' +
        '\x02\x02\x02\x93\x94\x07(\x02\x02\x94&\x03\x02\x02\x02\x95\x98\x05/\x18' +
        '\x02\x96\x98\x051\x19\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02' +
        '\x02\x98(\x03\x02\x02\x02\x99\x9A\x07=\x02\x02\x9A*\x03\x02\x02\x02\x9B' +
        '\x9C\x07.\x02\x02\x9C,\x03\x02\x02\x02\x9D\x9E\x070\x02\x02\x9E.\x03\x02' +
        '\x02\x02\x9F\xA0\x07?\x02\x02\xA00\x03\x02\x02\x02\xA1\xA2\x07<\x02\x02' +
        '\xA22\x03\x02\x02\x02\xA3\xA7\x05I%\x02\xA4\xA6\x05G$\x02\xA5\xA4\x03' +
        '\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03' +
        '\x02\x02\x02\xA84\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05' +
        '=\x1F\x02\xAB\xAC\x057\x1C\x02\xAC\xAD\x05=\x1F\x02\xAD\xAF\x03\x02\x02' +
        '\x02\xAE\xAB\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02' +
        '\x02\xB0\xB1\x03\x02\x02\x02\xB16\x03\x02\x02\x02\xB2\xB0\x03\x02\x02' +
        '\x02\xB3\xB4\x07a\x02\x02\xB48\x03\x02\x02\x02\xB5\xB6\t\x02\x02\x02\xB6' +
        ':\x03\x02\x02\x02\xB7\xB8\t\x03\x02\x02\xB8<\x03\x02\x02\x02\xB9\xBB\x05' +
        ';\x1E\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03' +
        '\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD>\x03\x02\x02\x02\xBE\xBF\t\x04' +
        '\x02\x02\xBF@\x03\x02\x02\x02\xC0\xC1\t\x05\x02\x02\xC1B\x03\x02\x02\x02' +
        '\xC2\xC3\t\x06\x02\x02\xC3D\x03\x02\x02\x02\xC4\xC5\t\x0F\x02\x02\xC5' +
        'F\x03\x02\x02\x02\xC6\xC9\x05I%\x02\xC7\xC9\x05;\x1E\x02\xC8\xC6\x03\x02' +
        '\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9H\x03\x02\x02\x02\xCA\xCE\t\x02\x02' +
        '\x02\xCB\xCE\x057\x1C\x02\xCC\xCE\t\x10\x02\x02\xCD\xCA\x03\x02\x02\x02' +
        '\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCEJ\x03\x02\x02\x02' +
        '\xCF\xD0\x07$\x02\x02\xD0\xD1\x07$\x02\x02\xD1\xD2\x07$\x02\x02\xD2\xD4' +
        '\x03\x02\x02\x02\xD3\xD5\x05U+\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD6\x03' +
        '\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x03' +
        '\x02\x02\x02\xD8\xD9\x07$\x02\x02\xD9\xDA\x07$\x02\x02\xDA\xDB\x07$\x02' +
        '\x02\xDBL\x03\x02\x02\x02\xDC\xDE\x07$\x02\x02\xDD\xDF\x05W,\x02\xDE\xDD' +
        '\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE0\xDE' +
        '\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07$\x02\x02\xE3N\x03' +
        '\x02\x02\x02\xE4\xE5\x07)\x02\x02\xE5\xE6\x07)\x02\x02\xE6\xE7\x07)\x02' +
        '\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x05]/\x02\xE9\xEA\x07)\x02\x02\xEA' +
        '\xEB\x07)\x02\x02\xEB\xEC\x07)\x02\x02\xECP\x03\x02\x02\x02\xED\xEF\x07' +
        ')\x02\x02\xEE\xF0\n\x07\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02' +
        '\x02\x02\xF1\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x03\x02' +
        '\x02\x02\xF3\xF4\x07)\x02\x02\xF4R\x03\x02\x02\x02\xF5\xF7\x07\x0F\x02' +
        '\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03\x02\x02' +
        '\x02\xF8\xFB\x07\f\x02\x02\xF9\xFB\x07\x0F\x02\x02\xFA\xF6\x03\x02\x02' +
        '\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFA\x03\x02\x02' +
        '\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\b*\x02\x02' +
        '\xFFT\x03\x02\x02\x02\u0100\u0104\x07^\x02\x02\u0101\u0105\t\b\x02\x02' +
        '\u0102\u0105\x05Y-\x02\u0103\u0105\x05[.\x02\u0104\u0101\x03\x02\x02\x02' +
        '\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03' +
        '\x02\x02\x02\u0106\u0108\n\t\x02\x02\u0107\u0100\x03\x02\x02\x02\u0107' +
        '\u0106\x03\x02\x02\x02\u0108V\x03\x02\x02\x02\u0109\u010D\x07^\x02\x02' +
        '\u010A\u010E\t\b\x02\x02\u010B\u010E\x05Y-\x02\u010C\u010E\x05[.\x02\u010D' +
        '\u010A\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010C\x03\x02' +
        '\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u0111\n\n\x02\x02\u0110\u0109' +
        '\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111X\x03\x02\x02\x02\u0112' +
        '\u0113\x07w\x02\x02\u0113\u0114\x05A!\x02\u0114\u0115\x05A!\x02\u0115' +
        '\u0116\x05A!\x02\u0116\u0117\x05A!\x02\u0117Z\x03\x02\x02\x02\u0118\u0119' +
        '\x07W\x02\x02\u0119\u011A\x05A!\x02\u011A\u011B\x05A!\x02\u011B\u011C' +
        '\x05A!\x02\u011C\u011D\x05A!\x02\u011D\u011E\x05A!\x02\u011E\u011F\x05' +
        'A!\x02\u011F\u0120\x05A!\x02\u0120\u0121\x05A!\x02\u0121\\\x03\x02\x02' +
        '\x02\u0122\u0124\n\v\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0125\x03' +
        '\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126' +
        '^\x03\x02\x02\x02\u0127\u012B\x07b\x02\x02\u0128\u0129\x07^\x02\x02\u0129' +
        '\u012C\t\f\x02\x02\u012A\u012C\n\f\x02\x02\u012B\u0128\x03\x02\x02\x02' +
        '\u012B\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03' +
        '\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F' +
        '\u0130\x07b\x02\x02\u0130`\x03\x02\x02\x02\u0131\u0135\x05g4\x02\u0132' +
        '\u0134\n\r\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\u0137\x03\x02\x02' +
        '\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138' +
        '\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u0139\b1\x03\x02\u0139' +
        'b\x03\x02\x02\x02\u013A\u013E\x05i5\x02\u013B\u013D\v\x02\x02\x02\u013C' +
        '\u013B\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013F\x03\x02' +
        '\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140' +
        '\u013E\x03\x02\x02\x02\u0141\u0142\x05i5\x02\u0142\u0143\x03\x02\x02\x02' +
        '\u0143\u0144\b2\x03\x02\u0144d\x03\x02\x02\x02\u0145\u0147\x05k6\x02\u0146' +
        '\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0146\x03\x02' +
        '\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A' +
        "\u014B\b3\x02\x02\u014Bf\x03\x02\x02\x02\u014C\u014D\x07\'\x02\x02\u014D" +
        "h\x03\x02\x02\x02\u014E\u014F\x07\'\x02\x02\u014F\u0150\x07\'\x02\x02" +
        "\u0150\u0151\x07\'\x02\x02\u0151j\x03\x02\x02\x02\u0152\u0153\t\x0E\x02" +
        '\x02\u0153l\x03\x02\x02\x02\x19\x02\x97\xA7\xB0\xBC\xC8\xCD\xD6\xE0\xF1' +
        '\xF6\xFA\xFC\u0104\u0107\u010D\u0110\u0125\u012B\u012D\u0135\u013E\u0148' +
        '\x04\b\x02\x02\x02\x03\x02'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!ARCLexer.__ATN) {
            ARCLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ARCLexer._serializedATN))
        }

        return ARCLexer.__ATN
    }

}

