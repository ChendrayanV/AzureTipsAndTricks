(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{350:function(e,t,n){"use strict";n.r(t);var o=n(43),a=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h4",{attrs:{id:"download-all-azure-documentation-for-offline-viewing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download-all-azure-documentation-for-offline-viewing","aria-hidden":"true"}},[e._v("#")]),e._v(" Download all Azure Documentation for offline viewing")]),e._v(" "),n("p",[e._v("There have been several times when I've wished to have all the Azure documentation on my local computer whether it be a flight, etc.. I've never found a way except finding the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pieces of the documentation"),n("OutboundLink")],1),e._v(" that I wanted and pressing the "),n("strong",[e._v("Download PDF")]),e._v(" button.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/documentation1.png")}}),e._v(" "),n("p",[e._v("Until Now...")]),e._v(" "),n("p",[e._v("If you want to download "),n("strong",[e._v("ALL")]),e._v(" of the Azure documentation, then follow the instructions below:")]),e._v(" "),n("p",[e._v("1.) You'll need to first download "),n("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jq"),n("OutboundLink")],1),e._v(" with is a JSON processor. If you have a Mac, then you can use "),n("code",[e._v("brew install jq")]),e._v("  or on Windows use Chocolatey NuGet "),n("code",[e._v("chocolatey install jq")]),e._v(". Sample output from my machine is below:")]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Michaels-MBP:Documents mbcrump$ brew install jq\n==> Installing jq\n==> Downloading https://homebrew.bintray.com/bottles/jq-1.5_3.high_sierra.bottle\n################################################################################################################################################ 100.0%\n==> Pouring jq-1.5_3.high_sierra.bottle.tar.gz /usr/local/Cellar/jq/1.5_3: 19 files, 946.6KB\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("2.) Next you'll need to run the following command which uses curl and jq to download every PDF contained in the "),n("a",{attrs:{href:"https://api.github.com/repositories/72685026/contents/articles?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repo"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('curl https://api.github.com/repositories/72685026/contents/articles | jq -r \'.[] | select(.type | contains("dir")) | "https://docs.microsoft.com/pdfstore/Azure.azure-documents/live/\\(.name).pdf"\' | wget -i -\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("3.) Give it some time as it is about 2GB and check the folder where you ran that command.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/documentation2.png")}}),e._v(" "),n("p",[e._v("4.) Success! You'll see all the PDF file and you now have a current snapshot of Azure's documentation.")])])},[],!1,null,null,null);t.default=a.exports}}]);