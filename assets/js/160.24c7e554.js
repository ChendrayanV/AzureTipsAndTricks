(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{458:function(e,t,o){"use strict";o.r(t);var r=o(43),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"use-net-core-webapi-and-docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-net-core-webapi-and-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Use .NET Core WebAPI and Docker Compose")]),e._v(" "),o("p",[e._v("How hard do you think it is to:")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"./tip54.html"}},[e._v("Create and Publish a .NET Core WebAPI project")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"./tip55.html"}},[e._v("Add it to a Docker Container using Docker Compose and push it to a Docker Hub")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"./tip56.html"}},[e._v("Use it in Azure with Web App for Containers")])],1)]),e._v(" "),o("p",[e._v("In this mini-series, we'll build on each part starting with creating and publishing a .NET Core WebAPI project. Yesterday, we used Docker Compose to create an image and push it to Docker Cloud and we'll wrap up today by deploying it to Azure using "),o("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/containers?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),o("OutboundLink")],1),e._v("?WT.mc_id=azure-azuredevtips-micrum).")]),e._v(" "),o("h4",{attrs:{id:"deploy-a-net-core-webapi-project-to-web-app-for-containers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-net-core-webapi-project-to-web-app-for-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy a .NET Core WebAPI Project to Web App for Containers")]),e._v(" "),o("p",[e._v("In "),o("router-link",{attrs:{to:"./tip55.html"}},[e._v("Tip 55")]),e._v(" we pushed our Docker Image to Docker Cloud. As a reminder, we created a repository in Docker Cloud and headed back to our command prompt (or terminal) and ran the following commands:")],1),e._v(" "),o("p",[o("code",[e._v("docker login")]),e._v(" to authenticate")]),e._v(" "),o("p",[o("code",[e._v("docker push mbcrump/mbcwebapi:latest")]),e._v(" to push your image to Docker Cloud.")]),e._v(" "),o("p",[e._v("Now that we have a Docker Cloud repository, we can push it to Azure using "),o("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/containers?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),o("OutboundLink")],1),e._v("?WT.mc_id=azure-azuredevtips-micrum).")]),e._v(" "),o("p",[e._v("Go ahead and log into the Azure Portal and search for "),o("code",[e._v("Web App for Containers")]),e._v(". You should see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/webappcont1.png")}}),e._v(" "),o("p",[e._v("Press the "),o("code",[e._v("Create")]),e._v(" button and you should see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/webappcont2.png")}}),e._v(" "),o("p",[e._v("You should be familiar with (name, resource group, etc.) with the exception being the "),o("code",[e._v("Configure Container")]),e._v(" section.")]),e._v(" "),o("p",[e._v("Here we will use Docker Hub (think Docker Cloud), our repo is public, and the name of the image. Which follows the format "),o("code",[e._v("docker username/our app name:tag")]),e._v(". For a refresher, visit "),o("router-link",{attrs:{to:"./tip55/"}},[e._v("Step 2 in yesterday's post")]),e._v(".")],1),e._v(" "),o("p",[e._v("After our Web App for Container is deployed, you can simply go to your new url and append "),o("code",[e._v("/api/values")]),e._v(" to see your new site.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/webappcont3.png")}})])},[],!1,null,null,null);t.default=a.exports}}]);