(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{358:function(t,e,n){"use strict";n.r(e);var a=n(43),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Documentation"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h4",{attrs:{id:"use-the-azure-portal-for-durable-functions-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-the-azure-portal-for-durable-functions-development","aria-hidden":"true"}},[t._v("#")]),t._v(" Use the Azure Portal for Durable Functions Development")]),t._v(" "),n("p",[t._v("Durable Functions addresses the task of managing state for an application. They are intended to address a variety of patterns and scenarios that would quickly get complicated using triggers, timers, etc. especially when orchestrating a range of activities with a set of tasks that need to happen each time a particular event occurs.")]),t._v(" "),n("p",[t._v("Here is one example: I have one task, that causes another task to occur, and so on with some conditional statements and other business logic to fork the workflow but I’m trying to go from point a to point b. An example of this is called "),n("strong",[t._v("Function chaining")]),t._v(". This refers to the pattern of executing a sequence of functions in a particular order.")]),t._v(" "),n("p",[t._v("Head over to our "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/durable-functions-sequence?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),n("OutboundLink")],1),t._v(" for more info or follow along with this tutorial and it might make sense.")]),t._v(" "),n("h4",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),n("p",[t._v("Log into the Azure Portal and create a new Azure Function project like the following:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc1.png")}}),t._v(" "),n("p",[t._v("Configure the function app to use the 2.0 runtime version in the "),n("strong",[t._v("Function app")]),t._v(" settings tab.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc2.png")}}),t._v(" "),n("p",[t._v("Create a new custom function.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc3.png")}}),t._v(" "),n("p",[t._v("Search for the "),n("strong",[t._v("Durable Functions Http Starter - C#")]),t._v(" template.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc4.png")}}),t._v(" "),n("p",[t._v("Install the extention when prompted.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc5.png")}}),t._v(" "),n("p",[t._v("Give the orchestration client function a name "),n("strong",[t._v("HttpStart")]),t._v(" that is created by selecting Durable Functions Http Starter - C# template.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc6.png")}}),t._v(" "),n("p",[t._v("Once this is complete, then copy the URL as we'll use it later on.")]),t._v(" "),n("p",[t._v("Create a new orchestration function named "),n("strong",[t._v("HelloSequence")]),t._v(" and select "),n("strong",[t._v("Durable Functions Orchestrator")]),t._v(" template.")]),t._v(" "),n("p",[t._v("Create another function named "),n("strong",[t._v("Hello")]),t._v(" and use the "),n("strong",[t._v("Durable Functions Activity")]),t._v(" template.")]),t._v(" "),n("p",[t._v("Install "),n("a",{attrs:{href:"https://www.getpostman.com/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),n("OutboundLink")],1),t._v(", and create a POST request and use the following URL (after suppling the new Azure Function Name) : "),n("code",[t._v("https://yourfunctionname.azurewebsites.net/api/orchestrators/HelloSequence")])]),t._v(" "),n("p",[t._v("You should see the following:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc7.png")}}),t._v(" "),n("p",[t._v("Click on one of the "),n("strong",[t._v("statusQueryGetUri")]),t._v(" URLs and you see the status of the Durable Function :")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azdfunc8.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);