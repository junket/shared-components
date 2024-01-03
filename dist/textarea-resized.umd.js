!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).sharedcomponents=t()}(this,function(){var e={template:'\n    <span class="component-textarea-resized">\n      <div class="textarea-container">\n        <div :class="field_class" v-html="textContent + \'<br>\'"></div>\n        <textarea\n          ref="textarea"\n          :id="field_id"\n          :class="field_class"\n          :name="field_name"\n          :rows="rows"\n          :disabled="disabled"\n          :readonly="readonly"\n          :placeholder="placeholder"\n          v-model="textContent"></textarea>\n      </div>\n    </span>\n  ',props:{field_id:{type:String,default:"textarea-resized"},field_class:{type:String,default:""},field_name:{type:String,default:""},rows:{type:Number,default:3},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:""},value:{type:String,default:""}},components:{},data:function(){return{textContent:this.$props.value}},mounted:function(){},methods:{}};return document.head.innerHTML+='\n<style type="text/css">\n  .component-textarea-resized .textarea-container {\n    display: grid;\n  }\n  .component-textarea-resized .textarea-container > div {\n    white-space: pre-line;\n    visibility: hidden;\n  }\n  .component-textarea-resized .textarea-container > textarea {\n    resize: none;\n    overflow: hidden;\n  }\n  .component-textarea-resized .textarea-container > textarea,\n  .component-textarea-resized .textarea-container > div {\n    font: inherit;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n</style>',e});
//# sourceMappingURL=textarea-resized.umd.js.map
