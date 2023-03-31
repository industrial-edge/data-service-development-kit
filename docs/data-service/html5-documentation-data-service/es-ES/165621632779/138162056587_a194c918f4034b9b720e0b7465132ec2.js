﻿topicarray["a194c918f4034b9b720e0b7465132ec2"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eDescripción general de las funciones\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescripción\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​La aplicación \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ permite conectar otras aplicaciones, p. ej., \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​, con el \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ (broker MQTT) o con un Unified Comfort Panel (Open Pipe). En \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ es posible agrupar datos y guardarlos durante un tiempo determinado. El \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ recibe los datos directamente de la instalación con ayuda de conectores, por ej., un SIMATIC S7 Connector.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​En \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ se lee el tema Metadatos del \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ y luego, a partir de estos metadatos, pueden crearse variables.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Puede modelar la estructura de su proceso industrial con ayuda de activos y aspectos, y dividirla en unidades lógicas, por ej., un activo por máquina.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDefinir la directiva de retención para los datos de variables\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Según el ajuste predeterminado, todos los datos que se transfieren desde los conectores a las variables se guardan automáticamente en Data Service sin límite de tiempo.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Con la directiva de retención se pueden definir para cada nivel de activo y para cada variable periodos de tiempo propios durante los que deben guardarse los datos. Si define, p. ej., un periodo de 10 días, se guardarán los datos de los últimos 10 días y los datos anteriores se borrarán. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Si solo define un periodo en el nivel de activo más alto, todos los activos subordinados y las variables que estos contienen lo heredarán.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​También es posible desactivar el almacenamiento de datos por variable. Al hacerlo, el almacenamiento de datos se pausa y se puede volver a activar en cualquier momento.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Se pueden guardar los datos de las siguientes variables:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​variables de conectores MQTT\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​variables de conectores Connectivity Suite\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​variables REST API\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Encontrará más información sobre el ajuste de la directiva de retención aquí:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan class=\"hotspot\"\u003e\u003ca data-type=\"hotspot-link\" id=\"hs_chk7aa796db-8284-8741-fce2-fa55ddbe6521e3742d0e1d883c66415289fbd33782c3\" class=\"hotspot-link display-i-none\" data-mode=\"grab\" data-label=\"auto\" data-linktarget=\"e3742d0e1d883c66415289fbd33782c3\" data-targettype=\"TOPIC\" data-targetdocument=\"f6bde3d8eadf7032ad1d060c4526e9de\" data-targetdetail=\"e3742d0e1d883c66415289fbd33782c3\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\" href=\"#\" data-linktype=\"see-also\"\u003e\u003cspan class=\"expanding-glossary-text\"\u003e\u003cspan\u003e​Definir la directiva de retención para un activo\u003c/span\u003e\u003c/span\u003e\u003ci class=\"\" data-chk=\"test2\"\u003e\u003c/i\u003e\u003c/a\u003e\u003ca id=\"hse_chk7aa796db-8284-8741-fce2-fa55ddbe6521e3742d0e1d883c66415289fbd33782c3\" data-id=\"hs_chk7aa796db-8284-8741-fce2-fa55ddbe6521e3742d0e1d883c66415289fbd33782c3\" data-type=\"hotspot-ext-link\" data-linktype=\"hotspot-ext-link\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\" class=\"hotspot-ext-link display-none\"\u003e\u003ci class=\"\" data-chk=\"test1\"\u003e\u003c/i\u003e\u003c/a\u003e\u003cdiv id=\"hsc_chk7aa796db-8284-8741-fce2-fa55ddbe6521e3742d0e1d883c66415289fbd33782c3\" class=\"hotspot-container hidden topicclass display-none\" style=\"\" data-type=\"hotspot-container\" data-id=\"hs_id\" data-linktarget=\"e3742d0e1d883c66415289fbd33782c3\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\"\u003e\u003c/div\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan class=\"hotspot\"\u003e\u003ca data-type=\"hotspot-link\" id=\"hs_chk0a3f1df7-1479-d883-3217-dce6430fb2f157bec643d68330d64eda53f45bdd05c5\" class=\"hotspot-link display-i-none\" data-mode=\"grab\" data-label=\"auto\" data-linktarget=\"57bec643d68330d64eda53f45bdd05c5\" data-targettype=\"TOPIC\" data-targetdocument=\"f6bde3d8eadf7032ad1d060c4526e9de\" data-targetdetail=\"57bec643d68330d64eda53f45bdd05c5\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\" href=\"#\" data-linktype=\"see-also\"\u003e\u003cspan class=\"expanding-glossary-text\"\u003e\u003cspan\u003e​Definir la directiva de retención para una sola variable\u003c/span\u003e\u003c/span\u003e\u003ci class=\"\" data-chk=\"test2\"\u003e\u003c/i\u003e\u003c/a\u003e\u003ca id=\"hse_chk0a3f1df7-1479-d883-3217-dce6430fb2f157bec643d68330d64eda53f45bdd05c5\" data-id=\"hs_chk0a3f1df7-1479-d883-3217-dce6430fb2f157bec643d68330d64eda53f45bdd05c5\" data-type=\"hotspot-ext-link\" data-linktype=\"hotspot-ext-link\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\" class=\"hotspot-ext-link display-none\"\u003e\u003ci class=\"\" data-chk=\"test1\"\u003e\u003c/i\u003e\u003c/a\u003e\u003cdiv id=\"hsc_chk0a3f1df7-1479-d883-3217-dce6430fb2f157bec643d68330d64eda53f45bdd05c5\" class=\"hotspot-container hidden topicclass display-none\" style=\"\" data-type=\"hotspot-container\" data-id=\"hs_id\" data-linktarget=\"57bec643d68330d64eda53f45bdd05c5\" data-parentid=\"a194c918f4034b9b720e0b7465132ec2\"\u003e\u003c/div\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eVersión beta para el Unified Comfort Panel (UCP)\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Una vez transcurrida la fase beta de Data Service para el UCP no se tiene derecho a la retención de datos en la versión completa. Las configuraciones específicas de usuario no pueden migrarse. Todos los datos de usuario guardados en Data Service dejan de estar disponibles después de una nueva instalación.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}