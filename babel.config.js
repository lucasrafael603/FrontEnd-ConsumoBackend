module.exports = {

    presets: ['@babel/preset-env', //Transipla o codigo baseado no ambiente
    '@babel/preset-react' //Essa configuração que habilita o JSX e converta com que modo a Transpilação entenda

    ],
    plugins: [

        '@babel/plugin-transform-runtime' // Habilita a opção de utilizar async await em requisições
    ]

}