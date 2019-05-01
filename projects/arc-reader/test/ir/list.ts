module.exports = [
    {
        task: 'insert',
        path: [
            't1'
        ],
        data: []
    },
    {
        task: 'insert',
        path: [
            't2',
            1
        ],
        data: []
    },
    {
        task: 'insert',
        path: [
            't3',
            1
        ],
        data: [
            {
                task: 'insert',
                path: [
                    1
                ],
                data: []
            }
        ]
    },
    {
        task: 'insert',
        path: [
            't4',
            1
        ],
        data: []
    },
    {
        task: 'insert',
        path: [
            't4',
            2
        ],
        data: [
            {
                task: 'insert',
                path: [
                    1
                ],
                data: []
            }
        ]
    },
    {
        task: 'insert',
        path: [
            't5',
            1
        ],
        data: true
    },
    {
        task: 'insert',
        path: [
            't6',
            1
        ],
        data: true
    },
    {
        task: 'insert',
        path: [
            't6',
            2
        ],
        data: false
    },
    {
        task: 'insert',
        path: [
            't6',
            3
        ],
        data: null
    },
    {
        task: 'insert',
        path: [
            't7',
            1
        ],
        data: [
            {
                task: 'insert',
                path: [
                    1
                ],
                data: true
            }
        ]
    },
    {
        task: 'insert',
        path: [
            't7',
            2
        ],
        data: [
            {
                task: 'insert',
                path: [
                    1
                ],
                data: [
                    {
                        task: 'insert',
                        path: [
                            1
                        ],
                        data: false
                    }
                ]
            }
        ]
    },
    {
        task: 'insert',
        path: [
            't7',
            3
        ],
        data: [
            {
                task: 'insert',
                path: [
                    1
                ],
                data: [
                    {
                        task: 'insert',
                        path: [
                            1
                        ],
                        data: [
                            {
                                task: 'insert',
                                path: [
                                    1
                                ],
                                data: null
                            }
                        ]
                    }
                ]
            }
        ]
    }
]