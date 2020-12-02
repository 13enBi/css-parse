export default `.page-changelog {
    padding-bottom: 100px
}

.page-changelog .fr {
    float: right;
    padding: 0
}

.page-changelog .fr.el-button {
    transform: translateY(-3px)
}

.page-changelog .fr a {
    display: block;
    padding: 10px 15px;
    color: #333
}

.page-changelog .fr:hover a {
    color: #409eff
}

.page-changelog .heading {
    font-size: 24px;
    margin-bottom: 60px;
    color: #333
}

.page-changelog .timeline {
    padding: 0 0 10px;
    position: relative;
    color: #5e6d82
}

.page-changelog .timeline>li {
    position: relative;
    padding-bottom: 15px;
    list-style: none;
    line-height: 1.8;
    border: 1px solid #ddd;
    border-radius: 4px
}

.page-changelog .timeline>li:not(:last-child) {
    margin-bottom: 50px
}

.page-changelog .timeline ul {
    padding: 30px 30px 15px
}

.page-changelog .timeline ul ul {
    padding: 5px 0 0 27px
}

.page-changelog .timeline ul ul li {
    padding-left: 0;
    color: #555;
    word-break: normal
}

.page-changelog .timeline ul ul li:before {
    content: "";
    circle: 4px #fff;
    border: 1px solid #333;
    margin-right: -12px;
    display: inline-block;
    vertical-align: middle
}

.page-changelog .timeline li li {
    font-size: 16px;
    list-style: none;
    padding-left: 20px;
    padding-bottom: 5px;
    color: #333;
    word-break: break-all
}

.page-changelog .timeline li li:before {
    content: "";
    circle: 6px #333;
    transform: translateX(-20px);
    display: inline-block;
    vertical-align: middle
}

.page-changelog .timeline i {
    padding: 0 20px;
    display: inline-block
}

.page-changelog .timeline h3 {
    margin: 0;
    padding: 15px 30px;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    color: #333;
    font-weight: 700
}

.page-changelog .timeline h3 a {
    opacity: 1;
    font-size: 20px;
    float: none;
    margin-left: 0;
    color: #333
}

.page-changelog .timeline h4 {
    margin: 0 0 -10px;
    font-size: 18px;
    padding-left: 54px;
    padding-top: 30px;
    font-weight: 700
}

.page-changelog .timeline p {
    margin: 0
}

.page-changelog .timeline em {
    position: absolute;
    right: 30px;
    font-style: normal;
    top: 23px;
    font-size: 16px;
    color: #666
}

.page-component__scroll {
    height: calc(100% - 80px);
    margin-top: 80px
}

.page-component__scroll>.el-scrollbar__wrap {
    overflow-x: auto
}

.page-component {
    box-sizing: border-box;
    height: 100%
}

.page-component.page-container {
    padding: 0
}

.page-component .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top .3s
}

.page-component .page-component__nav>.el-scrollbar__wrap {
    height: 100%;
    overflow-x: auto
}

.page-component .page-component__nav.is-extended {
    padding-top: 0
}

.page-component .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0
}

.page-component .side-nav>ul {
    padding-bottom: 50px
}

.page-component .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box
}

.page-component .content {
    padding-top: 50px
}

.page-component .content>h3 {
    margin: 55px 0 20px
}

.page-component .content>table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em
}

.page-component .content>table strong {
    font-weight: 400
}

.page-component .content>table td,.page-component .content>table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px
}

.page-component .content>table th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400
}

.page-component .content>table td {
    color: #606266
}

.page-component .content>table td:first-child,.page-component .content>table th:first-child {
    padding-left: 10px
}

.page-component .content>ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em
}

@media (max-width: 768px) {
    .page-component .page-component__nav {
        width:100%;
        position: static;
        margin-top: 0
    }

    .page-component .side-nav {
        padding-top: 0;
        padding-left: 50px
    }

    .page-component .page-component__content {
        padding-left: 10px;
        padding-right: 10px
    }

    .page-component .content {
        padding-top: 0
    }

    .page-component .content>table {
        overflow: auto;
        display: block
    }
}

.cards[data-v-7aed89bc] {
    margin: 30px 0 70px
}

.card[data-v-7aed89bc] {
    background: #fbfcfd;
    height: 204px;
    text-align: center
}

.card img[data-v-7aed89bc] {
    margin: 40px auto 25px;
    width: 80px;
    height: 80px
}

.card h4[data-v-7aed89bc] {
    font-size: 18px;
    color: #1f2d3d;
    font-weight: 400;
    margin: 0
}

.card span[data-v-7aed89bc] {
    font-size: 14px;
    color: #99a9bf
}

.page-guide {
    padding: 55px 30px 95px;
    box-sizing: border-box
}

.page-guide .content {
    padding-left: 25px;
    margin-left: -1px
}

.page-guide .content h2 {
    margin-bottom: 10px
}

.page-guide .content h3 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #1f2d3d
}

.page-guide .content p {
    line-height: 1.6;
    font-size: 14px;
    color: #5e6d82
}

.page-guide .content ul {
    margin-bottom: 50px;
    padding-left: 0
}

.page-guide .content li {
    font-size: 14px;
    margin-bottom: 10px;
    color: #99a9bf;
    list-style: none
}

.page-guide .content li:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #5e6d82;
    margin-right: 5px
}

.page-guide .content li strong {
    color: #5e6d82;
    font-weight: 400
}

@media (max-width: 768px) {
    .page-guide .content {
        padding-left:0
    }
}

.banner[data-v-10b2420c] {
    text-align: center
}

.banner-desc[data-v-10b2420c] {
    padding-top: 20px
}

.banner-desc h1[data-v-10b2420c] {
    font-size: 34px;
    margin: 0;
    line-height: 48px;
    color: #555
}

.banner-desc p[data-v-10b2420c] {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px
}

.sponsors[data-v-10b2420c] {
    display: flex;
    justify-content: center
}

.sponsor[data-v-10b2420c] {
    margin: 0 20px 50px;
    display: inline-flex;
    width: 300px;
    height: 100px;
    justify-content: center
}

.sponsor img[data-v-10b2420c] {
    margin-right: 20px
}

.sponsor div[data-v-10b2420c] {
    display: flex;
    flex-direction: column;
    justify-content: center
}

.sponsor p[data-v-10b2420c] {
    margin: 0;
    line-height: 1.8;
    color: #999;
    font-size: 14px
}

.jumbotron[data-v-10b2420c] {
    width: 890px;
    margin: 30px auto;
    position: relative
}

.jumbotron img[data-v-10b2420c] {
    width: 100%
}

.jumbotron .jumbotron-red[data-v-10b2420c] {
    transition: height .1s;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden
}

.cards[data-v-10b2420c] {
    margin: 0 auto 110px;
    width: 1140px
}

.cards .container[data-v-10b2420c] {
    padding: 0;
    margin: 0 -11px;
    width: auto
}

.cards .container[data-v-10b2420c]:after,.cards .container[data-v-10b2420c]:before {
    display: table;
    content: ""
}

.cards .container[data-v-10b2420c]:after {
    clear: both
}

.cards li[data-v-10b2420c] {
    width: 25%;
    padding: 0 19px;
    box-sizing: border-box;
    float: left;
    list-style: none
}

.cards img[data-v-10b2420c] {
    width: 160px;
    height: 120px
}

.card[data-v-10b2420c] {
    height: 430px;
    width: 100%;
    background: #fff;
    border: 1px solid #eaeefb;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all .3s ease-in-out;
    bottom: 0
}

.card img[data-v-10b2420c] {
    margin: 66px auto 60px
}

.card h3[data-v-10b2420c] {
    margin: 0;
    font-size: 18px;
    color: #1f2f3d;
    font-weight: 400
}

.card p[data-v-10b2420c] {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 25px;
    line-height: 20px
}

.card a[data-v-10b2420c] {
    height: 53px;
    line-height: 52px;
    font-size: 14px;
    color: #409eff;
    text-align: center;
    border: 0;
    border-top: 1px solid #eaeefb;
    padding: 0;
    cursor: pointer;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    transition: all .3s;
    text-decoration: none;
    display: block
}

.card a[data-v-10b2420c]:hover {
    color: #fff;
    background: #409eff
}

.card[data-v-10b2420c]:hover {
    bottom: 6px;
    box-shadow: 0 6px 18px 0 rgba(232,237,250,.5)
}

@media (max-width: 1140px) {
    .cards[data-v-10b2420c] {
        width:100%
    }

    .cards .container[data-v-10b2420c] {
        width: 100%;
        margin: 0
    }

    .banner .container[data-v-10b2420c] {
        width: 100%;
        box-sizing: border-box
    }

    .banner img[data-v-10b2420c] {
        right: 0
    }
}

@media (max-width: 1000px) {
    .banner .container img[data-v-10b2420c],.jumbotron[data-v-10b2420c] {
        display:none
    }
}

@media (max-width: 768px) {
    .cards li[data-v-10b2420c] {
        width:80%;
        margin: 0 auto 20px;
        float: none
    }

    .cards .card[data-v-10b2420c] {
        height: auto;
        padding-bottom: 54px
    }

    .banner-desc #line2[data-v-10b2420c],.banner-stars[data-v-10b2420c] {
        display: none
    }

    .banner-desc h2[data-v-10b2420c] {
        font-size: 32px
    }

    .banner-desc p[data-v-10b2420c] {
        width: auto
    }
}

.theme-intro-b[data-v-10b2420c] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200
}

.theme-intro-b .intro-banner[data-v-10b2420c] {
    position: absolute
}

.theme-intro-b img[data-v-10b2420c] {
    width: 300px
}

.theme-intro-b .title[data-v-10b2420c] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center
}

.theme-intro-b .title p[data-v-10b2420c] {
    padding: 0;
    margin: 10px 0
}

.theme-intro-a[data-v-10b2420c] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200
}

.theme-intro-a .mask[data-v-10b2420c] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: .5
}

.theme-intro-a .intro-banner[data-v-10b2420c] {
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    text-align: center;
    z-index: 100
}

.theme-intro-a .intro-banner img[data-v-10b2420c] {
    width: 100%
}

.theme-intro-a .intro-banner .intro-text[data-v-10b2420c] {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0
}

.theme-intro-a .intro-banner .intro-text p[data-v-10b2420c] {
    padding: 0;
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    color: #fff
}

h3[data-v-aadaaa32] {
    margin-bottom: 15px
}

.block[data-v-aadaaa32] {
    margin-bottom: 55px
}

p[data-v-aadaaa32] {
    margin: 0 0 15px
}

.nav-demos p[data-v-aadaaa32] {
    margin-bottom: 50px
}

.nav-demos h5[data-v-aadaaa32] {
    margin: 0
}

.nav-demos img[data-v-aadaaa32] {
    padding: 15px;
    background-color: #f9fafc;
    width: 100%;
    margin-bottom: 15px;
    cursor: pointer
}

.dialog-img[data-v-aadaaa32] {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0
}

.dialog-img .imgWrap[data-v-aadaaa32] {
    margin: 0 auto;
    position: relative;
    top: 100px;
    padding-bottom: 50px
}

.dialog-img img[data-v-aadaaa32] {
    display: block;
    width: 100%
}

.mask[data-v-aadaaa32] {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #373737;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    z-index: 1000
}

.zoom-enter-active[data-v-aadaaa32],.zoom-leave-active[data-v-aadaaa32] {
    transition: transform .3s cubic-bezier(.78,.14,.15,.86),opacity .3s cubic-bezier(.78,.14,.15,.86)
}

.zoom-enter[data-v-aadaaa32],.zoom-leave-active[data-v-aadaaa32] {
    transform: scale(.3);
    opacity: 0
}

.fade-enter-active[data-v-aadaaa32],.fade-leave-active[data-v-aadaaa32] {
    transition: opacity .3s cubic-bezier(.78,.14,.15,.86)
}

.fade-enter[data-v-aadaaa32],.fade-leave-active[data-v-aadaaa32] {
    opacity: 0
}

.page-resource[data-v-194489a6] {
    padding-top: 55px;
    box-sizing: border-box
}

.page-resource .resource-placeholder[data-v-194489a6] {
    margin: 50px auto 100px;
    text-align: center
}

.page-resource .resource-placeholder img[data-v-194489a6] {
    width: 150px
}

.page-resource .resource-placeholder h4[data-v-194489a6] {
    margin: 20px 0 16px;
    font-size: 16px;
    color: #1f2f3d;
    line-height: 1
}

.page-resource .resource-placeholder p[data-v-194489a6] {
    margin: 0;
    font-size: 14px;
    color: #99a9bf;
    line-height: 1
}

.cards[data-v-194489a6] {
    margin: 35px auto 110px
}

.cards .container[data-v-194489a6] {
    padding: 0;
    margin: 0 -11px;
    width: auto
}

.cards .container[data-v-194489a6]:after,.cards .container[data-v-194489a6]:before {
    display: table;
    content: ""
}

.cards .container[data-v-194489a6]:after {
    clear: both
}

.cards li[data-v-194489a6] {
    width: 33.33333%;
    padding: 0 11px;
    box-sizing: border-box;
    float: left;
    list-style: none
}

h2[data-v-194489a6] {
    font-size: 28px;
    margin: 0
}

p[data-v-194489a6] {
    font-size: 14px;
    color: #5e6d82
}

.card[data-v-194489a6] {
    height: 394px;
    width: 100%;
    background: #fff;
    border: 1px solid #eaeefb;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: bottom .3s;
    bottom: 0
}

.card img[data-v-194489a6] {
    margin: 75px auto 35px;
    height: 87px
}

.card h3[data-v-194489a6] {
    margin: 0 0 10px;
    font-size: 18px;
    color: #1f2f3d;
    font-weight: 400;
    height: 22px
}

.card p[data-v-194489a6] {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 30px;
    margin: 0;
    word-break: break-all;
    line-height: 1.8
}

.card a[data-v-194489a6] {
    height: 42px;
    width: 190px;
    display: inline-block;
    line-height: 42px;
    font-size: 14px;
    background-color: #409eff;
    color: #fff;
    text-align: center;
    border: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 2px;
    transition: all .3s;
    text-decoration: none;
    margin-top: 20px
}

@media (max-width: 850px) {
    .cards li[data-v-194489a6] {
        max-width:500px;
        float: none;
        margin: 10px auto 30px;
        width: 80%
    }

    .cards li .card[data-v-194489a6] {
        height: auto;
        padding-bottom: 20px
    }

    .cards h3[data-v-194489a6] {
        height: auto
    }
}

.page-container.page-theme-preview {
    padding-top: 30px
}

.page-container.page-theme-preview .display {
    width: 75%;
    display: inline-block;
    vertical-align: top
}

.page-container.page-theme-preview .display h3 {
    font-size: 28px;
    margin: 30px 0 0
}

.page-container.page-theme-preview .side {
    display: inline-block;
    width: 25%
}

.page-container.page-theme-preview .side .editor {
    overflow: hidden;
    background: #f5f7fa;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    margin-bottom: 20px
}

.page-container.page-theme-preview .side .editor.fixed {
    position: fixed;
    width: 285px;
    box-sizing: border-box
}

.page-theme:last-child {
    margin-bottom: 55px
}

.page-theme h2 {
    font-size: 28px;
    line-height: 28px;
    margin: 0
}

.page-theme ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}

.page-theme .theme-card {
    display: inline-block;
    height: 150px;
    height: 16vw;
    max-height: 230px;
    flex: 0 0 24%;
    cursor: default;
    vertical-align: bottom
}

.page-theme .theme-section {
    margin-bottom: 20px
}

.page-theme .second-section {
    margin-top: 60px
}
` + 
`.config {
    padding: 5px 0
}

.config-label {
    color: #606266;
    font-size: 14px;
    padding-bottom: 8px;
    position: relative
}

.content-80 {
    box-sizing: border-box;
    display: inline-block;
    width: 80%
}

.content-20 {
    width: 20%
}

.content-10,.content-20 {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: bottom
}

.content-10 {
    width: 10%
}

.content-15 {
    box-sizing: border-box;
    display: inline-block;
    width: 15%;
    vertical-align: bottom
}

input {
    cursor: pointer
}

.colorPicker {
    margin-left: 10px;
    vertical-align: bottom
}

.select {
    width: 100%
}

.plus-button[data-v-98c1688e] {
    position: absolute;
    left: 90%;
    margin-top: 4px
}

.colorPicker[data-v-98c1688e] {
    margin-left: 0
}

.content-20 .el-input__suffix-inner span[data-v-98c1688e] {
    line-height: 28px
}

.content-20[data-v-98c1688e] {
    padding: 0 3px
}

.content-10[data-v-98c1688e] {
    vertical-align: top
}

.content-tip[data-v-98c1688e] {
    color: #909399;
    font-size: 12px
}

.config-content[data-v-98c1688e] {
    padding: 5px 0
}

.el-button--mini.is-round[data-v-98c1688e] {
    padding: 3px
}

.editor-main {
    padding: 0 18px 15px;
    overflow-y: auto
}

.category-name {
    color: #c0c4cc;
    font-size: 18px;
    display: block;
    margin: 13px 0 3px
}

.configurator-action {
    padding: 15px 18px 0
}

.configurator-action .action-group {
    padding: 5px 0
}

.configurator-action .action-group img {
    cursor: not-allowed;
    width: 16px;
    height: 16px;
    padding: 7px 0;
    margin-left: 5px;
    opacity: .5
}

.configurator-action .action-group img.active {
    opacity: 1;
    cursor: pointer
}

.configurator-action .action-group img:last-of-type {
    margin-left: 10px
}

.configurator-action .action-group .button-group {
    float: right
}

.configurator-action .action-group .button-group .el-button {
    padding: 6px 15px
}

.configurator-action .action-group .button-group .el-button.is-disabled {
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5
}

.configurator-action .action-group .button-group .reset {
    background: #e6f1fc;
    color: #1989fa;
    border-color: #a2cffc
}

.configurator-action .action-group .button-group .download {
    background: #1989fa;
    color: #fff;
    border-color: #1989fa
}

.configurator-action .selector {
    width: 100%
}

.configurator-action .selector input {
    background: #f5f7fa;
    border: none;
    font-size: 18px;
    padding-left: 0;
    color: #606266
}

.configurator-action .line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #dcdfe6
}

.main-configurator {
    height: 100%;
    display: flex;
    flex-direction: column
}

.component-preview {
    padding-right: 10px
}

.component-preview:last-of-type {
    padding-bottom: 20px
}

.component-preview h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
}

.component-preview .demo-item {
    margin-top: 10px;
    margin-right: 40px
}

.component-preview .demo-line {
    margin: 15px 0
}

.component-preview .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf
}

.component-preview .el-carousel__item:nth-child(odd) {
    background-color: #d3dce6
}

.component-preview .el-avatar:not(:last-child) {
    margin-right: 20px
}

.component-preview .avatar-demo {
    display: flex;
    align-items: center
}

.component-preview .heading>div {
    margin-bottom: 15px
}

.component-preview .title {
    font-size: 18px;
    font-weight: 400;
    padding: 0 20px
}

.component-preview .paragraph {
    padding: 0 20px
}

.component-preview .demo-color-box {
    margin: 0
}

.component-preview .color {
    margin-right: -12%
}

.theme-card-item {
    user-select: none;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    height: 90%;
    margin: 25px 0;
    box-shadow: 0 0 1px 0 #666
}

.theme-card-item.is-hidden {
    opacity: 0;
    height: 0
}

.theme-card-item .upload {
    cursor: pointer;
    background: #f5f7fa;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

.theme-card-item .upload .upload-action {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    color: #606266
}

.theme-card-item .upload .upload-action img {
    display: block;
    margin: 0 auto
}

.theme-card-item .upload .upload-action span {
    display: block;
    font-size: 14px;
    margin-top: 8px
}

.theme-card-item .preview {
    position: relative;
    height: 70%;
    width: 100%
}

.theme-card-item .preview .line {
    height: 50%
}

.theme-card-item .preview .line-2 {
    width: 50%;
    height: 100%;
    display: inline-block
}

.theme-card-item .preview .line-4 {
    width: 25%;
    height: 100%;
    display: inline-block
}

.theme-card-item .preview .action {
    transition: all .3s;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.theme-card-item .preview .action .action-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: .4
}

.theme-card-item .preview .action .action-block {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 25%;
    top: 25%
}

.theme-card-item .preview .action .action-item {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    width: 30%;
    color: #eee
}

.theme-card-item .preview .action .action-item:hover {
    color: #fff
}

.theme-card-item .preview .action .action-item:hover .circle {
    border-color: #fff
}

.theme-card-item .preview .action .action-item .icon {
    height: 50%;
    font-size: 22px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center
}

.theme-card-item .preview .action .action-item .icon img {
    width: 130%
}

.theme-card-item .preview .action .action-item .name {
    font-size: 12px;
    height: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px
}

.theme-card-item .preview .action .action-item-right {
    margin-left: 40%
}

.theme-card-item .info {
    height: 30%;
    line-height: 16px;
    display: flex;
    align-items: center
}

.theme-card-item .info .info-center {
    width: 100%
}

.theme-card-item .info .title {
    font-weight: 700;
    font-size: 16px;
    color: #303133;
    padding: 0 12px;
    justify-content: space-between
}

.theme-card-item .info .right {
    float: right;
    font-weight: 400;
    font-size: 14px;
    color: #909399
}

.theme-card-item .info .more {
    font-size: 16px;
    cursor: pointer
}

.theme-card-item .info .description {
    padding: 0 12px;
    font-size: 14px;
    color: #606266;
    margin-top: 10px
}

.theme-card-item.is-upload {
    box-shadow: none;
    border: 1px dashed #dcdfe6
}

.theme-card-item.is-upload:hover {
    box-shadow: none
}

.theme-card-item:hover {
    box-shadow: 0 0 10px 0 #999
}

.theme-card-item:hover .action {
    opacity: 1
}
`