﻿topicarray["0aee53cbca6c7fb27184acbc3bd87901"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eImproving performance\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescription\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​With the following configuration examples, we can ensure the highest possible performance of the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app:\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eWrite performance\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app supports 5,000 changes per second. Changes means that a write operation takes place in the database. In the worst case, only one value is written per write operation. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The following scenarios are therefor possible:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​5,000 variables with a write cycle of 1 s (5,000 * 1,000/1,000 = 5,000 changes)\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​500 variables with a write cycle of 100 ms (500 * 1,000/100 = 5,000 changes)\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​50 variables with a write cycle of 10 ms (50 * 1,000/10 = 5,000 changes)\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​etc.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​If the values are sent from the connector in packets, more data can be processed. For example, a connector sends the values of a variable in packets of 1,000 every second. This means that there is only one write operation per second.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eRead performance\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The read performance is influenced by many factors. Two examples provide a guide value here:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​A variable with a 1 ms write cycle is to be queried over one hour. 1 ms in 1 h = 3.6 million values.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Aggregated query (e.g. average) = 10 seconds load time\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Raw data query = 30 seconds load time\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Database (dashboard configuration in Performance Insight)\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4 counter variables in 1 second resolution\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Widget 1: Chart (diagram)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3 counter variables\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No aggregation\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Widget 2: Chart (diagram)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3 counter variables\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Aggregation: Average\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Widget 3: Gauge (pointer diagram)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1st counter variable\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Aggregation: Average\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Widget 4: Value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2nd counter variable\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Aggregation: Average\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Widget 5: Heatmap\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3rd counter variable\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No aggregation\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The test runs were performed on a Unified Comfort Panel (UCP) instead (with the minimum hardware equipment).\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Load times of the database\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Loading 1 day\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​10:70 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​777,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Loading 1 week\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​58.00 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5,443,200 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Impact of parameters on the test:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Time period\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1 day\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​10:70 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​777,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​19:21 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1,555,200 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​28:99 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2,332,800 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​37:09 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3,110,400 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​50:57 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3,888,000 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​61:01 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4,665,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​7 days\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​68:00 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5,443,200 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​=\u0026gt; Linear influence\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Calculation time period (1 day)\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​10 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11:83 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd rowspan=\"6\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​777,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​20 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​10:41 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​30 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11.03 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​40 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11.46 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​50 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11.84 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​60 min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11.68 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​= has no effect\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Variable cycle (1 day)\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​11.50 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​777,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​8.50 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​388,800 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4.30 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​259,200 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4.09 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​194,400 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4.23 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​155,520 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3.12 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​129,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​7 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3.01 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​111,086 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​8 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2.52 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​97,200 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​=\u0026gt; Linear influence\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"33.3%\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"33.3%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Aggregation (1 day, all requests use only one specific aggregation)\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Average\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3.28 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd rowspan=\"7\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​777,600 data points\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​ Min\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Max\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2.5 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sum\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Last\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Counter\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​70 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Timer\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​62 s\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd colspan=\"3\" class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​=\u0026gt; no influence of the aggregations in the database\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​=\u0026gt; major influence of the aggregations in the program code\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}