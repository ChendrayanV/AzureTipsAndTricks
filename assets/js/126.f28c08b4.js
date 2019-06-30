(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{424:function(e,t,r){"use strict";r.r(t);var o=r(43),s=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Resource Manager"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=hBl_2iaqIDs&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=20?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use the Azure Resource Explorer"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"intro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),r("p",[e._v("We've recently created a "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),r("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),r("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface and how we'd add "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),r("OutboundLink")],1),e._v(" for our web app. We also took a look at a feature called "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testing in Production"),r("OutboundLink")],1),e._v(" which allows us to distribute traffic between our production and other slots. We also looked at using "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip24.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell"),r("OutboundLink")],1),e._v(" to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature. In this post, we'll continue exploring our web app with a feature called Azure Resource Explorer which will allow us to quickly explore REST APIs.")]),e._v(" "),r("h4",{attrs:{id:"use-the-azure-resource-explorer-to-quickly-explore-rest-apis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-the-azure-resource-explorer-to-quickly-explore-rest-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Use the Azure Resource Explorer to quickly explore REST APIs")]),e._v(" "),r("p",[e._v("The Azure Resource Manager allows you to explore (and learn) REST APIs in your Azure Subscription in a friendly fashion. If you log into your Azure account and go to your App Service that you created and look under "),r("strong",[e._v("Development Tools")]),e._v(" then you will see it.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azureresourceexplorer1.png")}}),e._v(" "),r("p",[e._v("Inside the blade, it will redirect you to "),r("a",{attrs:{href:"https://resources.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://resources.azure.com"),r("OutboundLink")],1),e._v(" and you'll see your current app. You can also go back to the url without entering the portal, but will have to manually browse to your app.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azureresourceexplorer2.png")}}),e._v(" "),r("p",[e._v("There is a navigation tree that you can click on to drill into the current web app. As you click the URL and JSON returned will update. You'll also notice that there is an "),r("strong",[e._v("Edit")]),e._v(" button that you can use to call a PUT to update an item as shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azureresourceexplorer3.gif")}}),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" Keep in mind that you'll need to be in "),r("code",[e._v("Read\\Write")]),e._v(" mode to do this which can be found in the top panel by your name.")]),e._v(" "),r("p",[e._v("You can also perform a POST or DELETE on some resources as well as Create. There is documentation, but what is very interesting to me is the "),r("strong",[e._v("PowerShell")]),e._v(" and "),r("strong",[e._v("CLI 2.0")]),e._v(" options. If you click on "),r("strong",[e._v("CLI 2.0")]),e._v(" for a resource then you'll see the following.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azureresourceexplorer4.png")}}),e._v(" "),r("p",[e._v("Awesome! That is the CLI 2.0 commands we could use in BASH or wherever the CLI 2.0 is supported.")]),e._v(" "),r("p",[e._v("If we were looking in the following node of our web app and say for example that we want to update the "),r("code",[e._v("logsDirectorySizeLimit")]),e._v(" property, then we could start taking advantage of this feature.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/azureresourceexplorer5.png")}}),e._v(" "),r("p",[e._v("In this example, I clicked on the "),r("code",[e._v("CLI 2.0")]),e._v(" link and it provided the following code:")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("az resource show --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01\n\naz resource update --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01 --set properties.key"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("value\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("The only value that we'd need to update is on the last line with the "),r("code",[e._v("--set properties.key=value")]),e._v(". Since we want to just update the "),r("code",[e._v("logsDirectorySizeLimit")]),e._v(" property then we can do so with "),r("code",[e._v("--set properties.logsDirectorySizeLimit=40")]),e._v(".")]),e._v(" "),r("p",[e._v("The complete command is shown below.")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("az resource show --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01\n\naz resource update --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01 --set properties.logsDirectorySizeLimit"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("40\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("I could now switch back over to my browser and press the "),r("strong",[e._v("GET")]),e._v(" button to see that the "),r("code",[e._v("logsDirectorySizeLimit")]),e._v(" has now been updated to 40.")])])},[],!1,null,null,null);t.default=s.exports}}]);