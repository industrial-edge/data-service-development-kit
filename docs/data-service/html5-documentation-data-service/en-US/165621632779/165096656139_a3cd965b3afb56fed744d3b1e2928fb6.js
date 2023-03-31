﻿topicarray["a3cd965b3afb56fed744d3b1e2928fb6"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eWhat\u0027s new in Data Service V1.6?\u003c/div\u003e\u003cdiv class=\"prolog-container\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​All important new features of Data Service are summarized here. You can find more details on individual topics in the documentation.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBlob data type\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​When creating a variable, you can also now select Blob as the data type. Blob data type is a data type for unstructured data that is stored in binary form. It can be used to store data that is not covered by the other supported data types. In contrast to other data types, the Blob data type has the additional optional property \"Blob type\". This property can be used to define the format of the stored data. We recommend the use of a standardized approach such as MIME types.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You can find more information on MIME types here: \u003c/span\u003e\u003cspan class=\"externalhotspot\"\u003e\u003ca class=\"external-link\" data-type=\"external-link\" data-linktype=\"external-link\" data-linktarget=\"https://wiki.selfhtml.org/wiki/MIME-Type/%C3%9Cbersicht\" data-targettype=\"\" data-targetmediatype=\"Internet\" data-parentid=\"a3cd965b3afb56fed744d3b1e2928fb6\" href=\"#\" rel=\"noopener noreferrer\" title=\"https://wiki.selfhtml.org/wiki/MIME-Type/%C3%9Cbersicht\"\u003e\u003cspan class=\"expanding-glossary-text\"\u003e\u003cspan\u003e​MIME types\u003c/span\u003e\u003c/span\u003e\u003c/a\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDefining databus credentials centrally\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The default databus credentials (broker URL, user name, password) can be defined centrally for all connectors in the Data Service settings. However, these settings can be overwritten with connector-specific settings in the respective connector configurations.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAdding available connectors\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​SIMATIC connectors and Connectivity Suite connectors can be automatically searched and added with a single click. A manual user-defined connector configuration is not required (but is possible).\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eExporting/importing variable data\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The data of a variable can be exported to TXT for a selected time period, including existing aggregations. This export file can be imported to any other variable of your choice. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Possible uses:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Initializing a variable with data\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Backing up/exporting data in a generic format\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Transferring data to another Data Service instance\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​...\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDebugging view\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​In the event of errors, the debugging view provides valuable additional information. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The debugging view can be accessed at \"https://\u0026lt;IED_IP\u0026gt;/dataservice/#/debug\" and shows information, such as component versions and live logs, that is relevant to Support personnel. Extended logging can be enabled on a functional basis to obtain detailed information when needed.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eV1.4.0 - Migration cleanup\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​With Data Service V1.4.0, several technologies were replaced to achieve better performance. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​During installation of V1.4.0 or V1.5.0 based on V1.3.0, automatic migration is performed. This assumes, however, that Data Service still contains the previous technologies. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Starting with V1.6.0, this automatic migration is removed in order to clean up the previous technologies. As a result of this, when a version \u0026gt;= V1.6.0 is installed based directly on a version \u0026lt;= V1.3.0, the configuration and data are not migrated. To retain the data in this update scenario, a data backup must be created before the update and restored after the update. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​If your starting point is a version \u0026gt;= 1.4.0, the information above does not apply.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/165097020811_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"165621632779\" language=\"en-US\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"328\" data-original-width=\"1810\" data-resolution-x=\"330\" data-resolution-y=\"330\" id=\"165621632779_a3cd965b3afb56fed744d3b1e2928fb6_165097020811_DV_resource_ID0AZB02B\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eVariable and counter configuration in Data Service\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The variable configuration has been extended to support an acquisition category including counter configuration. This option was previously available only in the Performance Insight app but has now been moved to Data Service to allow these configurations for precalculated aggregations as well.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eSecurity: Encrypted / secure configuration memory\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Sensitive information such as databus credentials is encrypted and secure. Earlier versions of Data Service stored the databus credentials unencrypted in the internal memory. This information was able to be retrieved by downloading the IED file. This has now been corrected.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAggregations: Improvements to the user interface\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Aggregations are no longer explicitly displayed but are accessible via the source variable. (accessible for retention policy, preview, etc.)\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eExtended error messages and translations in the user interface\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Error messages for data backup/restoration and the change to IIH mode have been added. Several missing translations have been added.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003ePanel performance optimized\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The performance of subscriptions on the UCP has been improved.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}