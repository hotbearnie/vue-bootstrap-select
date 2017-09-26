require(['config'], function() {
    require(['vue','vBootstrapSelect',],
        function (Vue,vBootstrapSelect) {
            new Vue({
                el: '#app',
                components: {
                    'v-select': vBootstrapSelect
                },
                data: {
                    optionList: [
                        {id: '1', name: '啦啦啦啦',discription: '哈哈哈'},
                        {id: '2', name: '还是大厦',discription: '哈哈哈'},
                        {id: '3', name: 'deaden',discription: '哈哈哈'},
                        {id: '4', name: '时尚大师',discription: '哈哈哈'},
                        {id: '5', name: '实打实大师',discription: '哈哈哈'}
                    ],
                    selectOption: {
                        liveSearch: true,
                        noneSelectedText: '请选择',
                        liveSearchPlaceholder: '输入关键词检索'
                    }
                },
                methods: {
                    handleChange: function () {
                        console.log(arguments)
                    }
                }
            })
    });
});