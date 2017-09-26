define(function () {
    var componentOptions = {
        template: '<select><slot></slot></select>',
        props: {
            options: {
                type: Object
            }
        },
        mounted: function () {
            if (this.options) {
                $(this.$el).selectpicker(this.options)
            } else {
                $(this.$el).selectpicker();
            }
            this.create();
        },
        beforeDestroy: function () {
            this.destroy();
        },
        methods: {
            create: function () {
                var $el = $(this.$el);
                var _this = this;
                $el.on('show.bs.select',function (event) {
                    _this.$emit('show',event)
                });
                $el.on('shown.bs.select',function (event) {
                    _this.$emit('shown',event)
                });
                $el.on('hide.bs.select',function (event) {
                    _this.$emit('hide',event)
                });
                $el.on('hidden.bs.select',function (event) {
                    _this.$emit('hidden',event)
                });
                $el.on('loaded.bs.select', function (event) {
                    _this.$emit('loaded',event)
                });
                $el.on('rendered.bs.select', function (event) {
                    _this.$emit('rendered',event)
                });
                $el.on('refreshed.bs.select', function (event) {
                    _this.$emit('refreshed',event)
                });
                $el.on('changed.bs.select', function (event,clickedIndex,newValue,oldValue) {
                    _this.$emit('changed',event,clickedIndex,newValue,oldValue);
                });
            },
            val: function (payload) {
                $(this.$el).selectpicker('val',payload)
            },
            selectAll: function () {
                $(this.$el).selectpicker('selectAll')
            },
            deselectAll: function () {
                $(this.$el).selectpicker('deselectAll')
            },
            render: function () {
                $(this.$el).selectpicker('render')
            },
            mobile: function () {
                $(this.$el).selectpicker('mobile')
            },
            setStyle: function (className) {
                $(this.$el).addClass(className).selectpicker('setStyle')
            },
            refresh: function () {
                $(this.$el).selectpicker('refresh')
            },
            toggle: function () {
                $(this.$el).selectpicker('toggle')
            },
            hide: function () {
                $(this.$el).selectpicker('hide')
            },
            show: function () {
                $(this.$el).selectpicker('show')
            },
            destroy: function () {
                $(this.$el).selectpicker('destroy')
            }

        }

    }

    return componentOptions;
});