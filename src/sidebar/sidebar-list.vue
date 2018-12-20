<script>
import Vue from "vue";
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ListViewPlugin, SelectEventArgs } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';
Vue.use(SidebarPlugin, ListViewPlugin);

export default Vue.extend({
    data: function() {
        return {
            dataList: [
                  { text: 'Home' },
                  { text: 'About' },
                  { text: 'Careers' },
                  { text: 'FAQs' },
                  { text: 'Blog' },
                  { text: 'Uses' },
                  { text: 'Contact' }
            ],
            fields: { tooltip: 'text' },
            type : 'Over',
            width : '250px'
        }
    },
    methods: {
        newTabClick: function() {
           document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'samples/sidebar/sidebar-list/index.html');
        },
        // Listview select event handler
        onSelect: function(args) {
          this.$refs.sidebarInstance.hide();
          document.getElementsByClassName('textArea')[0].innerHTML =args.text+ " Page Content";
        },

        openClick: function() {
         this.$refs.sidebarInstance.show();
        },
        
        closeClick: function() {
         this.$refs.sidebarInstance.hide();
        }
    }
});
</script>

<template>
<div class="control-section">
    <!-- sample level element  -->
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        Click the button to view the sample
    </div>
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new Tab</a>
    </div>
    <!-- sample level element  -->
    <div id="wrapper">
        <title>Essential JS 2 for Angular - Sidebar > SideBar with ListView</title>
        <div class="col-lg-12 col-sm-12 col-md-12">
            <div class="col-lg-12 col-sm-12 col-md-12">
                <div id="head">
                    <div class="text">Menu</div>
                    <span id="hamburger" class="e-icons menu" v-on:click="openClick"></span>
                    <div class="header">Header Content</div>
                </div>
                <!-- sidebar element declaration-->
                <ejs-sidebar id="sidebar-menu" :type='type' :width='width' ref="sidebarInstance">
                    <!-- normal state element declaration -->
                    <div id="close" class="e-icons" v-on:click="closeClick"></div>
                    <div class="content-area">
                        <!--List view element declaration-->
                        <ejs-listview id="menulist" :dataSource='dataList' :fields='fields' :select="onSelect"></ejs-listview>
                    </div>
                    <!-- end of normal state element declaration -->
                </ejs-sidebar>
                <!-- end of sidebar element -->
                <!-- main content declaration -->
                <div>
                    <div class="maincontent textArea">Application content</div>
                </div>
                <!--end of main content declaration -->
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            Click the button to view the Sidebar sample in new tab.
        </p>
    </div>
    <div id="description">
        <p>
            In this sample, the ListView component is placed inside the Sidebar for navigation.
        </p>
    </div>
</div>
</template>
<style>
   /* main content area styles */

 .maincontent {
    text-align: center;
    font-size: 20px;
    height: 300px;
    line-height: 300px;
    padding: 15px;
}

@media(max-width:550px) {
    #head .text {
        display: none;
    }
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

.textArea{
    height: 300px;
    line-height: 300px;
}

.sb-content-tab .center {
    display: block;
}

.col-lg-12.col-sm-12.col-md-12,
.control-section {
    padding: 0px;
}
/* end of main content area styles */
/* Header area styles */

#wrapper #head {
    border: none;
    background: #292961;
    width: 100%;
    height: 50px;
    color: #fff;
    padding: 0 30px;
    position: relative;
}

body {
    margin: 0px;
}

#hamburger.menu {
    font-size: 25px;
    cursor: pointer;
    float: left;
    line-height: 50px;
    position: absolute;
}

#hamburger.menu:before {
    content: '\e7f6';
}

#head .text {
    text-align: right;
    position: absolute;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    padding-left: 40px;
}

#head .header {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    width: 100%
}
/* end of header area styles */
/* sidebar styles */

.sb-content-tab #wrapper {
    display: none;
}

#sidebar-menu {
    background: #f5f5f5;
    padding: 20px;
}

#wrapper #close:before {
    content: "\e945";
}

#wrapper #close {
    float: right;
    color: rgba(0, 0, 0, 0.61);
    cursor: pointer;
    font-size: 20px;
    line-height: 14px;
}
/* listview style */

#menulist.e-listview .e-list-item,
#menulist.e-listview .e-list-item:last-child {
    height: 51px;
    line-height: 51px;
    text-align: center;
    background: #f5f5f5;
    color: rgba(0, 0, 0, 0.87);
    border-bottom: none;
}

#menulist.e-listview .e-list-item:hover {
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

#menulist {
    width: 200px;
    margin: 0 auto;
    position: relative;
    top: 15vh;
}
/* end of list view styles */

#sidebar-menu.e-sidebar {
    padding: 22px
}
/* end of sidebar styles */
</style>