export function generateEmailHtml(formData: { name: string; email: string;
phoneNumber: string; companyName: string; industry: string; jobTitle: string;
message: string; consent1: boolean; consent2: boolean; }): string { const {
name, email, phoneNumber, companyName, industry, jobTitle, message, consent1,
consent2 } = formData; return `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <link href="https://fonts.googleapis.com/css?family=Geologica:ital,wght@0,400;0,400;0,500;0,600;0,700"
        rel="stylesheet" />
    <title>Untitled</title>
    <!-- Made with Postcards Email Builder by Designmodo -->
    <style>
        html,
        body {
            margin: 0 !important;
            padding: 0 !important;
            min-height: 100% !important;
            width: 100% !important;
            -webkit-font-smoothing: antialiased;
        }

        * {
            -ms-text-size-adjust: 100%;
        }

        #outlook a {
            padding: 0;
        }

        .ReadMsgBody,
        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }

        table,
        td,
        th {
            mso-table-lspace: 0 !important;
            mso-table-rspace: 0 !important;
            border-collapse: collapse;
        }

        u+.body table,
        u+.body td,
        u+.body th {
            will-change: transform;
        }

        body,
        td,
        th,
        p,
        div,
        li,
        a,
        span {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }

        img {
            border: 0;
            outline: 0;
            line-height: 100%;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
        }

        .body .pc-project-body {
            background-color: transparent !important;
        }

        @media (min-width: 621px) {
            .pc-lg-hide {
                display: none;
            }

            .pc-lg-bg-img-hide {
                background-image: none !important;
            }
        }
    </style>
    <style>
        @media (max-width: 620px) {
            .pc-project-body {
                min-width: 0px !important;
            }

            .pc-project-container {
                width: 100% !important;
            }

            .pc-sm-hide,
            .pc-w620-gridCollapsed-1>tbody>tr>.pc-sm-hide {
                display: none !important;
            }

            .pc-sm-bg-img-hide {
                background-image: none !important;
            }

            .pc-w620-padding-0-0-0-0 {
                padding: 0px 0px 0px 0px !important;
            }

            .pc-w620-padding-20-20-50-20 {
                padding: 20px 20px 50px 20px !important;
            }

            table.pc-w620-spacing-0-0-0-0 {
                margin: 0px 0px 0px 0px !important;
            }

            td.pc-w620-spacing-0-0-0-0,
            th.pc-w620-spacing-0-0-0-0 {
                margin: 0 !important;
                padding: 0px 0px 0px 0px !important;
            }

            .pc-w620-font-size-36px {
                font-size: 36px !important;
            }

            .pc-w620-line-height-40px {
                line-height: 40px !important;
            }

            .pc-w620-font-size-18px {
                font-size: 18px !important;
            }

            .pc-w620-line-height-24px {
                line-height: 24px !important;
            }

            .pc-w620-letter-spacing-0px {
                letter-spacing: 0px !important;
            }

            .pc-w620-padding-20-20-20-20 {
                padding: 20px 20px 20px 20px !important;
            }

            .pc-w620-itemsSpacings-0-30 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 15px !important;
                padding-bottom: 15px !important;
            }

            .pc-w620-padding-16-16-16-16 {
                padding: 16px 16px 16px 16px !important;
            }

            table.pc-w620-spacing-0-0-28-0 {
                margin: 0px 0px 28px 0px !important;
            }

            td.pc-w620-spacing-0-0-28-0,
            th.pc-w620-spacing-0-0-28-0 {
                margin: 0 !important;
                padding: 0px 0px 28px 0px !important;
            }

            .pc-w620-font-size-28px {
                font-size: 28px !important;
            }

            table.pc-w620-spacing-0-0-12-0 {
                margin: 0px 0px 12px 0px !important;
            }

            td.pc-w620-spacing-0-0-12-0,
            th.pc-w620-spacing-0-0-12-0 {
                margin: 0 !important;
                padding: 0px 0px 12px 0px !important;
            }

            .pc-w620-font-size-16px {
                font-size: 16px !important;
            }

            .pc-w620-line-height-20px {
                line-height: 20px !important;
            }

            .pc-w620-width-fill {
                width: 100% !important;
            }

            .pc-w620-padding-0-8-8-8 {
                padding: 0px 8px 8px 8px !important;
            }

            .pc-w620-itemsSpacings-8-0 {
                padding-left: 4px !important;
                padding-right: 4px !important;
                padding-top: 0px !important;
                padding-bottom: 0px !important;
            }

            table.pc-w620-spacing-0-0-32-0 {
                margin: 0px 0px 32px 0px !important;
            }

            td.pc-w620-spacing-0-0-32-0,
            th.pc-w620-spacing-0-0-32-0 {
                margin: 0 !important;
                padding: 0px 0px 32px 0px !important;
            }

            .pc-w620-width-20 {
                width: 20px !important;
            }

            .pc-w620-height-auto {
                height: auto !important;
            }

            table.pc-w620-spacing-0-24-32-24 {
                margin: 0px 24px 32px 24px !important;
            }

            td.pc-w620-spacing-0-24-32-24,
            th.pc-w620-spacing-0-24-32-24 {
                margin: 0 !important;
                padding: 0px 24px 32px 24px !important;
            }

            .pc-w620-itemsSpacings-0-16 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 8px !important;
                padding-bottom: 8px !important;
            }

            .pc-w620-valign-top {
                vertical-align: top !important;
            }

            td.pc-w620-halign-center,
            th.pc-w620-halign-center {
                text-align: center !important;
            }

            table.pc-w620-halign-center {
                float: none !important;
                margin-right: auto !important;
                margin-left: auto !important;
            }

            img.pc-w620-halign-center {
                margin-right: auto !important;
                margin-left: auto !important;
            }

            table.pc-w620-spacing-20-20-0-20 {
                margin: 20px 20px 0px 20px !important;
            }

            td.pc-w620-spacing-20-20-0-20,
            th.pc-w620-spacing-20-20-0-20 {
                margin: 0 !important;
                padding: 20px 20px 0px 20px !important;
            }

            div.pc-w620-align-center,
            th.pc-w620-align-center,
            a.pc-w620-align-center,
            td.pc-w620-align-center {
                text-align: center !important;
                text-align-last: center !important;
            }

            table.pc-w620-align-center {
                float: none !important;
                margin-right: auto !important;
                margin-left: auto !important;
            }

            img.pc-w620-align-center {
                margin-right: auto !important;
                margin-left: auto !important;
            }

            .pc-w620-padding-32-0-20-0 {
                padding: 32px 0px 20px 0px !important;
            }

            .pc-w620-gridCollapsed-1>tbody,
            .pc-w620-gridCollapsed-1>tbody>tr,
            .pc-w620-gridCollapsed-1>tr {
                display: inline-block !important;
            }

            .pc-w620-gridCollapsed-1.pc-width-fill>tbody,
            .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr,
            .pc-w620-gridCollapsed-1.pc-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1>tbody>tr>td,
            .pc-w620-gridCollapsed-1>tr>td {
                display: block !important;
                width: auto !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
            }

            .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr>td,
            .pc-w620-gridCollapsed-1.pc-width-fill>tr>td {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr>td,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr>td {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-first>.pc-grid-td-first,
            .pc-w620-gridCollapsed-1>.pc-grid-tr-first>.pc-grid-td-first {
                padding-top: 0 !important;
            }

            .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-last>.pc-grid-td-last,
            .pc-w620-gridCollapsed-1>.pc-grid-tr-last>.pc-grid-td-last {
                padding-bottom: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-first>td,
            .pc-w620-gridCollapsed-0>.pc-grid-tr-first>td {
                padding-top: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-last>td,
            .pc-w620-gridCollapsed-0>.pc-grid-tr-last>td {
                padding-bottom: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-first,
            .pc-w620-gridCollapsed-0>tr>.pc-grid-td-first {
                padding-left: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-last,
            .pc-w620-gridCollapsed-0>tr>.pc-grid-td-last {
                padding-right: 0 !important;
            }

            .pc-w620-tableCollapsed-1>tbody,
            .pc-w620-tableCollapsed-1>tbody>tr,
            .pc-w620-tableCollapsed-1>tr {
                display: block !important;
            }

            .pc-w620-tableCollapsed-1.pc-width-fill>tbody,
            .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr,
            .pc-w620-tableCollapsed-1.pc-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-tableCollapsed-1>tbody>tr>td,
            .pc-w620-tableCollapsed-1>tr>td {
                display: block !important;
                width: auto !important;
            }

            .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr>td,
            .pc-w620-tableCollapsed-1.pc-width-fill>tr>td {
                width: 100% !important;
                box-sizing: border-box !important;
            }

            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr>td,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr>td {
                width: 100% !important;
                box-sizing: border-box !important;
            }
        }
    </style>
    <!--[if !mso]><!-- -->
    <style>
        @font-face {
            font-family: "Geologica";
            font-style: normal;
            font-weight: 400;
            src: url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDx_rc-oSBg.woff") format("woff"),
                url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDx_rc-oSAA.woff2") format("woff2");
        }

        @font-face {
            font-family: "Geologica";
            font-style: normal;
            font-weight: 500;
            src: url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDy3rc-oSBg.woff") format("woff"),
                url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDy3rc-oSAA.woff2") format("woff2");
        }

        @font-face {
            font-family: "Geologica";
            font-style: normal;
            font-weight: 700;
            src: url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD_jsc-oSBg.woff") format("woff"),
                url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD_jsc-oSAA.woff2") format("woff2");
        }

        @font-face {
            font-family: "Geologica";
            font-style: normal;
            font-weight: 600;
            src: url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD8Hsc-oSBg.woff") format("woff"),
                url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD8Hsc-oSAA.woff2") format("woff2");
        }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
      <style type="text/css">
        .pc-font-alt {
          font-family: Arial, Helvetica, sans-serif !important;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="
      width: 100% !important;
      min-height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      font-weight: normal;
      color: #2d3a41;
      mso-line-height-rule: exactly;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      font-variant-ligatures: normal;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      background-color: #e6e6e6;
    " bgcolor="#e6e6e6">
    <table class="pc-project-body" style="
        table-layout: fixed;
        width: 100%;
        min-width: 600px;
        background-color: #e6e6e6;
      " bgcolor="#e6e6e6" border="0" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
            <td align="center" valign="top" style="width: auto;">
                <table class="pc-project-container" align="center" style="width: 600px; max-width: 600px;" border="0"
                    cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                        <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="left"
                            valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tr>
                                    <td valign="top">
                                        <!-- BEGIN MODULE: Header  -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            role="presentation">
                                            <tr>
                                                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0"
                                                    cellspacing="0" cellpadding="0" role="presentation">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tr>
                                                            <!--[if !gte mso 9]><!-- -->
                                                            <td valign="top" class="pc-w620-padding-20-20-50-20" style="
                                    background-image: url('https://cloudfilesdm.com/postcards/image-1744830195284.jpg');
                                    background-size: cover;
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    padding: 32px 40px 143px 32px;
                                    height: unset;
                                    background-color: #ffffff;
                                  " bgcolor="#ffffff" background="https://cloudfilesdm.com/postcards/image-1744830195284.jpg">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END MODULE: Header  -->
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <!-- BEGIN MODULE: Text -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            role="presentation">
                                            <tr>
                                                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0"
                                                    cellspacing="0" cellpadding="0" role="presentation">
                                                    <table style="
                                border-collapse: separate;
                                border-spacing: 0px;
                              " width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                        <tr>
                                                            <td valign="top" class="pc-w620-padding-20-20-20-20" style="
                                    padding: 32px 48px 48px 48px;
                                    height: unset;
                                    background-color: #ffffff;
                                  " bgcolor="#ffffff">
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td align="left" valign="top" style="
                                          padding: 0px 0px 8px 0px;
                                          height: auto;
                                        ">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" role="presentation"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td valign="top" align="left">
                                                                                        <div class="pc-font-alt"
                                                                                            style="text-decoration: none;">
                                                                                            <div style="
                                                    font-size: 36px;
                                                    line-height: 40px;
                                                    text-align: left;
                                                    text-align-last: left;
                                                    color: #131312;
                                                    font-family: 'Geologica',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-style: normal;
                                                    font-weight: 700;
                                                    letter-spacing: -1px;
                                                  ">
                                                                                                <div style="
                                                      font-family: 'Geologica',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                    ">
                                                                                                    <span style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        font-size: 44px;
                                                        line-height: 54px;
                                                      ">New Brochure
                                                                                                        Request</span><span
                                                                                                        style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        font-weight: 400;
                                                        font-size: 44px;
                                                        line-height: 54px;
                                                      " class="pc-w620-font-size-36px pc-w620-line-height-40px">!</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tr>
                                                                        <td valign="top" align="left">
                                                                            <div class="pc-font-alt"
                                                                                style="text-decoration: none;">
                                                                                <div style="
                                              font-size: 18px;
                                              line-height: 24px;
                                              text-align: left;
                                              text-align-last: left;
                                              color: #818388;
                                              font-family: 'Geologica', Arial,
                                                Helvetica, sans-serif;
                                              font-style: normal;
                                              font-weight: 400;
                                              letter-spacing: -0.4px;
                                            ">
                                                                                    <div style="
                                                font-family: 'Geologica', Arial,
                                                  Helvetica, sans-serif;
                                              ">
                                                                                        <span style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                " class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px">Hello
                                                                                        </span><span style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  color: rgb(19, 19, 18);
                                                  font-weight: 600;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                " class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px">Team</span><span
                                                                                            style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                " class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px">,</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tr>
                                                                        <td valign="top" align="left">
                                                                            <div class="pc-font-alt"
                                                                                style="text-decoration: none;">
                                                                                <div style="
                                              font-size: 18px;
                                              line-height: 24px;
                                              text-align: left;
                                              text-align-last: left;
                                              color: #818388;
                                              font-family: 'Geologica', Arial,
                                                Helvetica, sans-serif;
                                              font-style: normal;
                                              font-weight: 400;
                                              letter-spacing: -0.4px;
                                            ">
                                                                                    <div style="
                                                font-family: 'Geologica', Arial,
                                                  Helvetica, sans-serif;
                                              ">
                                                                                        <span style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                " class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px">
                                                                                        </span><span style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                ">We've received a new brochure
                                                                                            download request. Please
                                                                                            find
                                                                                            the complete details below
                                                                                            and
                                                                                            follow up
                                                                                            accordingly</span><span
                                                                                            style="
                                                  font-family: 'Geologica',
                                                    Arial, Helvetica, sans-serif;
                                                  font-size: 20px;
                                                  line-height: 30px;
                                                " class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px">.</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END MODULE: Text -->
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <!-- BEGIN MODULE: Order summary -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            role="presentation">
                                            <tr>
                                                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0"
                                                    cellspacing="0" cellpadding="0" role="presentation">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tr>
                                                            <td valign="top" class="pc-w620-padding-0-8-8-8" style="
                                    padding: 0px 16px 16px 16px;
                                    height: unset;
                                    background-color: #ffffff;
                                  " bgcolor="#ffffff">
                                                                <table class="pc-width-fill pc-w620-gridCollapsed-1"
                                                                    width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                                                                        <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                            align="left" valign="top" style="
                                          width: 100%;
                                          padding-top: 0px;
                                          padding-right: 0px;
                                          padding-bottom: 0px;
                                          padding-left: 0px;
                                        ">
                                                                            <table style="width: 100%;" border="0"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation">
                                                                                <tr>
                                                                                    <td class="pc-w620-padding-16-16-16-16"
                                                                                        align="left" valign="top" style="
                                                padding: 32px 32px 32px 32px;
                                                height: auto;
                                                background-color: #fafafa;
                                                border-radius: 20px 20px 20px
                                                  20px;
                                              ">
                                                                                        <table align="left" width="100%"
                                                                                            border="0" cellpadding="0"
                                                                                            cellspacing="0"
                                                                                            role="presentation">
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table align="left"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-28-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              44px 0px;
                                                            height: auto;
                                                          ">
                                                                                                                <table
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    width="100%">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            align="left">
                                                                                                                            <div class="pc-font-alt"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                  ">
                                                                                                                                <div style="
                                                                      font-size: 28px;
                                                                      line-height: 107%;
                                                                      text-align: left;
                                                                      text-align-last: left;
                                                                      color: #131312;
                                                                      font-family: 'Geologica',
                                                                        Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-style: normal;
                                                                      font-weight: 600;
                                                                      letter-spacing: 0px;
                                                                    ">
                                                                                                                                    <div style="
                                                                        font-family: 'Geologica',
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                      ">
                                                                                                                                        <span
                                                                                                                                            style="
                                                                          font-family: 'Geologica',
                                                                            Arial,
                                                                            Helvetica,
                                                                            sans-serif;
                                                                          font-size: 30px;
                                                                          line-height: 100%;
                                                                        " class="pc-w620-font-size-28px">Summary</span>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Full
                                                                                                                                                                    Name</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 16px;
                                                                                        line-height: 20px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          " class="pc-w620-font-size-16px pc-w620-line-height-20px">${name}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 16px;
                                                                                  line-height: 20px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    " class="pc-w620-line-height-20px pc-w620-font-size-16px">Email
                                                                                                                                                                    Address</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 16px;
                                                                                        line-height: 20px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          " class="pc-w620-line-height-20px pc-w620-font-size-16px">${email}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Phone
                                                                                                                                                                    Number</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">${phoneNumber}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Job
                                                                                                                                                                    Title</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">${jobTitle}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Company
                                                                                                                                                                    Name</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">${companyName}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Industry</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="right">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">${industry}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    align="left"
                                                                                                                    style="
                                                              margin-right: auto;
                                                            ">
                                                                                                                    <tr>
                                                                                                                        <td valign="top"
                                                                                                                            style="
                                                                  line-height: 1px;
                                                                  font-size: 1px;
                                                                  border-bottom: 1px
                                                                    solid
                                                                    #dadada;
                                                                ">
                                                                                                                            &nbsp;
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 0px 0px
                                                              20px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 20px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            align="left">
                                                                                                                                            <tr>
                                                                                                                                                <td valign="top"
                                                                                                                                                    align="left">
                                                                                                                                                    <div class="pc-font-alt"
                                                                                                                                                        style="
                                                                                text-decoration: none;
                                                                              ">
                                                                                                                                                        <div style="
                                                                                  font-size: 20px;
                                                                                  line-height: 30px;
                                                                                  text-align: left;
                                                                                  text-align-last: left;
                                                                                  color: #818388;
                                                                                  font-family: 'Geologica',
                                                                                    Arial,
                                                                                    Helvetica,
                                                                                    sans-serif;
                                                                                  font-style: normal;
                                                                                  font-weight: 400;
                                                                                  letter-spacing: 0px;
                                                                                ">
                                                                                                                                                            <div style="
                                                                                    font-family: 'Geologica',
                                                                                      Arial,
                                                                                      Helvetica,
                                                                                      sans-serif;
                                                                                  ">
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                      font-family: 'Geologica',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 20px;
                                                                                      line-height: 30px;
                                                                                    ">Additional
                                                                                                                                                                    Message</span>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 50%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 20px;
                                                                ">
                                                                                                                            <table
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="right"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="right"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="right"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="right">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="left">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: right;
                                                                                        text-align-last: right;
                                                                                        color: #131312;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">${message
                                                                                                                                                                                ||
                                                                                                                                                                                "No
                                                                                                                                                                                additional
                                                                                                                                                                                message
                                                                                                                                                                                provided"}</span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="top">
                                                                                                    <table width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-spacing-0-0-12-0"
                                                                                                                style="
                                                            padding: 10px 0px
                                                              10px 0px;
                                                          ">
                                                                                                                <table
                                                                                                                    class="pc-width-fill pc-w620-gridCollapsed-1"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr
                                                                                                                        class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                        <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  width: 100%;
                                                                  padding-top: 0px;
                                                                  padding-right: 0px;
                                                                  padding-bottom: 0px;
                                                                  padding-left: 0px;
                                                                ">
                                                                                                                            <table
                                                                                                                                class="pc-w620-width-fill"
                                                                                                                                style="
                                                                    width: 100%;
                                                                  " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                                                <tr>
                                                                                                                                    <td align="left"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            align="left"
                                                                                                                                            width="100%"
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation">
                                                                                                                                            <tr>
                                                                                                                                                <td align="left"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="left">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="left">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: left;
                                                                                        text-align-last: left;
                                                                                        color: #070707;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">Marketing
                                                                                                                                                                                Communication:
                                                                                                                                                                                ${consent1
                                                                                                                                                                                ?
                                                                                                                                                                                'Accepted'
                                                                                                                                                                                :
                                                                                                                                                                                'Declined'}
                                                                                                                                                                            </span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                            <tr>
                                                                                                                                                <td align="left"
                                                                                                                                                    valign="top">
                                                                                                                                                    <table
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation"
                                                                                                                                                        align="left">
                                                                                                                                                        <tr>
                                                                                                                                                            <td valign="top"
                                                                                                                                                                align="left">
                                                                                                                                                                <div class="pc-font-alt"
                                                                                                                                                                    style="
                                                                                      text-decoration: none;
                                                                                    ">
                                                                                                                                                                    <div style="
                                                                                        font-size: 20px;
                                                                                        line-height: 30px;
                                                                                        text-align: left;
                                                                                        text-align-last: left;
                                                                                        color: #070707;
                                                                                        font-family: 'Geologica',
                                                                                          Arial,
                                                                                          Helvetica,
                                                                                          sans-serif;
                                                                                        font-style: normal;
                                                                                        font-weight: 400;
                                                                                        letter-spacing: 0px;
                                                                                      ">
                                                                                                                                                                        <div style="
                                                                                          font-family: 'Geologica',
                                                                                            Arial,
                                                                                            Helvetica,
                                                                                            sans-serif;
                                                                                        ">
                                                                                                                                                                            <span
                                                                                                                                                                                style="
                                                                                            font-family: 'Geologica',
                                                                                              Arial,
                                                                                              Helvetica,
                                                                                              sans-serif;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                          ">Terms
                                                                                                                                                                                &amp;
                                                                                                                                                                                Conditions
                                                                                                                                                                                :
                                                                                                                                                                                ${consent2
                                                                                                                                                                                ?
                                                                                                                                                                                'Accepted'
                                                                                                                                                                                :
                                                                                                                                                                                'Declined'}
                                                                                                                                                                            </span>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END MODULE: Order summary -->
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <!-- BEGIN MODULE: Footer  -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            role="presentation">
                                            <tr>
                                                <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0"
                                                    cellspacing="0" cellpadding="0" role="presentation">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tr>
                                                            <td valign="top" class="pc-w620-padding-32-0-20-0" style="
                                    padding: 54px 0px 32px 0px;
                                    height: unset;
                                    background-color: #ffffff;
                                  " bgcolor="#ffffff">
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td class="pc-w620-spacing-0-0-32-0"
                                                                            align="center"
                                                                            style="padding: 0px 0px 24px 0px;">
                                                                            <table align="center" border="0"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation">
                                                                                <tr>
                                                                                    <td style="width: unset;"
                                                                                        valign="top">
                                                                                        <table
                                                                                            class="pc-width-hug pc-w620-gridCollapsed-0"
                                                                                            align="center" border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0"
                                                                                            role="presentation">
                                                                                            <tr
                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                <td class="pc-grid-td-first pc-w620-itemsSpacings-8-0"
                                                                                                    valign="top" style="
                                                      padding-top: 0px;
                                                      padding-right: 5px;
                                                      padding-bottom: 0px;
                                                      padding-left: 0px;
                                                    ">
                                                                                                    <table style="
                                                        border-collapse: separate;
                                                        border-spacing: 0;
                                                      " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 16px 16px
                                                              16px 16px;
                                                            height: auto;
                                                            background-color: #fafafa;
                                                            border-radius: 100px
                                                              100px 100px 100px;
                                                            border-top: 1px
                                                              solid #ffffff29;
                                                            border-right: 1px
                                                              solid #ffffff29;
                                                            border-bottom: 1px
                                                              solid #ffffff29;
                                                            border-left: 1px
                                                              solid #ffffff29;
                                                          ">
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  line-height: 1;
                                                                ">
                                                                                                                            <a class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                    display: inline-block;
                                                                    vertical-align: top;
                                                                  ">
                                                                                                                                <img src="https://cloudfilesdm.com/postcards/73a8f666906aa60293fee02c11b718e8.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      outline: 0;
                                                                      line-height: 100%;
                                                                      -ms-interpolation-mode: bicubic;
                                                                      width: 24px;
                                                                      height: 24px;
                                                                    " alt="" />
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td class="pc-w620-itemsSpacings-8-0"
                                                                                                    valign="top" style="
                                                      padding-top: 0px;
                                                      padding-right: 5px;
                                                      padding-bottom: 0px;
                                                      padding-left: 5px;
                                                    ">
                                                                                                    <table style="
                                                        border-collapse: separate;
                                                        border-spacing: 0;
                                                      " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 16px 16px
                                                              16px 16px;
                                                            height: auto;
                                                            background-color: #fafafa;
                                                            border-radius: 100px
                                                              100px 100px 100px;
                                                            border-top: 1px
                                                              solid #ffffff29;
                                                            border-right: 1px
                                                              solid #ffffff29;
                                                            border-bottom: 1px
                                                              solid #ffffff29;
                                                            border-left: 1px
                                                              solid #ffffff29;
                                                          ">
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  line-height: 1;
                                                                ">
                                                                                                                            <a class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                    display: inline-block;
                                                                    vertical-align: top;
                                                                  ">
                                                                                                                                <img src="https://cloudfilesdm.com/postcards/03283341ec0a9b61d19ae0d120ec3b88.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      outline: 0;
                                                                      line-height: 100%;
                                                                      -ms-interpolation-mode: bicubic;
                                                                      width: 24px;
                                                                      height: 24px;
                                                                    " alt="" />
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td class="pc-w620-itemsSpacings-8-0"
                                                                                                    valign="top" style="
                                                      padding-top: 0px;
                                                      padding-right: 5px;
                                                      padding-bottom: 0px;
                                                      padding-left: 5px;
                                                    ">
                                                                                                    <table style="
                                                        border-collapse: separate;
                                                        border-spacing: 0;
                                                      " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 16px 16px
                                                              16px 16px;
                                                            height: auto;
                                                            background-color: #fafafa;
                                                            border-radius: 100px
                                                              100px 100px 100px;
                                                            border-top: 1px
                                                              solid #ffffff29;
                                                            border-right: 1px
                                                              solid #ffffff29;
                                                            border-bottom: 1px
                                                              solid #ffffff29;
                                                            border-left: 1px
                                                              solid #ffffff29;
                                                          ">
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  line-height: 1;
                                                                ">
                                                                                                                            <a class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                    display: inline-block;
                                                                    vertical-align: top;
                                                                  ">
                                                                                                                                <img src="https://cloudfilesdm.com/postcards/a07a0abed3e7788b5863c2be8de01cf6.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      outline: 0;
                                                                      line-height: 100%;
                                                                      -ms-interpolation-mode: bicubic;
                                                                      width: 24px;
                                                                      height: 24px;
                                                                    " alt="" />
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td class="pc-w620-itemsSpacings-8-0"
                                                                                                    valign="top" style="
                                                      padding-top: 0px;
                                                      padding-right: 5px;
                                                      padding-bottom: 0px;
                                                      padding-left: 5px;
                                                    ">
                                                                                                    <table style="
                                                        border-collapse: separate;
                                                        border-spacing: 0;
                                                      " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 16px 16px
                                                              16px 16px;
                                                            height: auto;
                                                            background-color: #fafafa;
                                                            border-radius: 100px
                                                              100px 100px 100px;
                                                            border-top: 1px
                                                              solid #ffffff29;
                                                            border-right: 1px
                                                              solid #ffffff29;
                                                            border-bottom: 1px
                                                              solid #ffffff29;
                                                            border-left: 1px
                                                              solid #ffffff29;
                                                          ">
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  line-height: 1;
                                                                ">
                                                                                                                            <a class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                    display: inline-block;
                                                                    vertical-align: top;
                                                                  ">
                                                                                                                                <img src="https://cloudfilesdm.com/postcards/f0df17afb61af46c32b89b63e27f6895.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      outline: 0;
                                                                      line-height: 100%;
                                                                      -ms-interpolation-mode: bicubic;
                                                                      width: 24px;
                                                                      height: 24px;
                                                                    " alt="" />
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td class="pc-grid-td-last pc-w620-itemsSpacings-8-0"
                                                                                                    valign="top" style="
                                                      padding-top: 0px;
                                                      padding-right: 0px;
                                                      padding-bottom: 0px;
                                                      padding-left: 5px;
                                                    ">
                                                                                                    <table style="
                                                        border-collapse: separate;
                                                        border-spacing: 0;
                                                      " border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                            padding: 16px 16px
                                                              16px 16px;
                                                            height: auto;
                                                            background-color: #fafafa;
                                                            border-radius: 100px
                                                              100px 100px 100px;
                                                            border-top: 1px
                                                              solid #ffffff29;
                                                            border-right: 1px
                                                              solid #ffffff29;
                                                            border-bottom: 1px
                                                              solid #ffffff29;
                                                            border-left: 1px
                                                              solid #ffffff29;
                                                          ">
                                                                                                                <table
                                                                                                                    align="center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                  line-height: 1;
                                                                ">
                                                                                                                            <a class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                    text-decoration: none;
                                                                    display: inline-block;
                                                                    vertical-align: top;
                                                                  ">
                                                                                                                                <img src="https://cloudfilesdm.com/postcards/2f81dffa596d7f405ae86a95d9394f82.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    style="
                                                                      display: block;
                                                                      border: 0;
                                                                      outline: 0;
                                                                      line-height: 100%;
                                                                      -ms-interpolation-mode: bicubic;
                                                                      width: 24px;
                                                                      height: 24px;
                                                                    " alt="" />
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td class="pc-w620-spacing-0-24-32-24"
                                                                            align="center" valign="top" style="
                                          padding: 0px 77px 40px 77px;
                                          height: auto;
                                        ">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" role="presentation"
                                                                                width="100%" style="
                                            margin-right: auto;
                                            margin-left: auto;
                                          ">
                                                                                <tr>
                                                                                    <td valign="top" align="center">
                                                                                        <div class="pc-font-alt"
                                                                                            style="text-decoration: none;">
                                                                                            <div style="
                                                    font-size: 16px;
                                                    line-height: 24px;
                                                    text-align: center;
                                                    text-align-last: center;
                                                    color: #6d6e73;
                                                    font-family: 'Geologica',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-style: normal;
                                                    font-weight: 400;
                                                    letter-spacing: 0px;
                                                  ">
                                                                                                <div style="
                                                      font-family: 'Geologica',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                    ">
                                                                                                    <span style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                      ">Company Name</span>
                                                                                                    <br /><span style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                      ">Excellence in Business
                                                                                                        Solutions</span><span
                                                                                                        style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        color: rgb(
                                                          140,
                                                          177,
                                                          11
                                                        );
                                                        font-weight: 700;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                      ">.</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td class="pc-w620-spacing-0-24-32-24"
                                                                            align="center" valign="top" style="
                                          padding: 0px 77px 40px 77px;
                                          height: auto;
                                        ">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" role="presentation"
                                                                                width="100%" style="
                                            margin-right: auto;
                                            margin-left: auto;
                                          ">
                                                                                <tr>
                                                                                    <td valign="top" align="center">
                                                                                        <div class="pc-font-alt"
                                                                                            style="text-decoration: none;">
                                                                                            <div style="
                                                    font-size: 16px;
                                                    line-height: 24px;
                                                    text-align: center;
                                                    text-align-last: center;
                                                    color: #6d6e73;
                                                    font-family: 'Geologica',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-style: normal;
                                                    font-weight: 400;
                                                    letter-spacing: 0px;
                                                  ">
                                                                                                <div style="
                                                      font-family: 'Geologica',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                    ">
                                                                                                    <span style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                      ">This email was generated
                                                                                                        automatically
                                                                                                        from your
                                                                                                        website's
                                                                                                        brochure request
                                                                                                        form</span><span
                                                                                                        style="
                                                        font-family: 'Geologica',
                                                          Arial, Helvetica,
                                                          sans-serif;
                                                        color: rgb(
                                                          140,
                                                          177,
                                                          11
                                                        );
                                                        font-weight: 700;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                      ">.</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td valign="top">
                                                                            <table width="100%" border="0"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation">
                                                                                <tr>
                                                                                    <td valign="top" style="
                                                line-height: 1px;
                                                font-size: 1px;
                                                border-bottom: 1px solid #e0e0e0;
                                              ">
                                                                                        &nbsp;
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table width="100%" border="0" cellpadding="0"
                                                                    cellspacing="0" role="presentation">
                                                                    <tr>
                                                                        <td class="pc-w620-spacing-20-20-0-20 pc-w620-valign-top pc-w620-halign-center"
                                                                            align="left"
                                                                            style="padding: 32px 32px 0px 32px;">
                                                                            <table class="pc-w620-halign-center"
                                                                                align="left" width="100%" border="0"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation">
                                                                                <tr>
                                                                                    <td valign="top">
                                                                                        <table
                                                                                            class="pc-width-fill pc-w620-gridCollapsed-1 pc-w620-halign-center"
                                                                                            width="100%" border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0"
                                                                                            role="presentation">
                                                                                            <tr
                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-16"
                                                                                                    align="left"
                                                                                                    valign="middle"
                                                                                                    style="
                                                      padding-top: 0px;
                                                      padding-right: 0px;
                                                      padding-bottom: 0px;
                                                      padding-left: 0px;
                                                    ">
                                                                                                    <table
                                                                                                        class="pc-w620-halign-center"
                                                                                                        style="width: 100%;"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tr>
                                                                                                            <td class="pc-w620-halign-center pc-w620-valign-top"
                                                                                                                align="left"
                                                                                                                valign="top">
                                                                                                                <table
                                                                                                                    class="pc-w620-halign-center"
                                                                                                                    align="left"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation">
                                                                                                                    <tr>
                                                                                                                        <td class="pc-w620-halign-center"
                                                                                                                            align="left"
                                                                                                                            valign="top">
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                class="pc-w620-halign-center"
                                                                                                                                align="left">
                                                                                                                                <tr>
                                                                                                                                    <td valign="top"
                                                                                                                                        class="pc-w620-align-center"
                                                                                                                                        align="left">
                                                                                                                                        <div class="pc-font-alt pc-w620-align-center"
                                                                                                                                            style="
                                                                          text-decoration: none;
                                                                        ">
                                                                                                                                            <div style="
                                                                            font-size: 16px;
                                                                            line-height: 24px;
                                                                            text-align: left;
                                                                            text-align-last: left;
                                                                            color: #6d6e73;
                                                                            font-family: 'Geologica',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-style: normal;
                                                                            font-weight: 500;
                                                                            letter-spacing: 0px;
                                                                          ">
                                                                                                                                                <div style="
                                                                              font-family: 'Geologica',
                                                                                Arial,
                                                                                Helvetica,
                                                                                sans-serif;
                                                                            ">
                                                                                                                                                    <span
                                                                                                                                                        style="
                                                                                font-family: 'Geologica',
                                                                                  Arial,
                                                                                  Helvetica,
                                                                                  sans-serif;
                                                                                font-size: 16px;
                                                                                line-height: 24px;
                                                                              ">©${new
                                                                                                                                                        Date().getFullYear()}
                                                                                                                                                        Company.
                                                                                                                                                        All
                                                                                                                                                        rights
                                                                                                                                                        reserved</span>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END MODULE: Footer  -->
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                            role="presentation">
                                            <tr>
                                                <td align="center" valign="top" style="
                              padding-top: 20px;
                              padding-bottom: 20px;
                              vertical-align: top;
                            ">
                                                    <a href="https://postcards.email/?uid=MzA5Njgw&type=footer"
                                                        target="_blank" style="
                                text-decoration: none;
                                overflow: hidden;
                                border-radius: 2px;
                                display: inline-block;
                              ">
                                                        <img src="https://cloudfilesdm.com/postcards/promo-footer-dark.jpg"
                                                            width="198" height="46" alt="Made with (o -) postcards"
                                                            style="
                                  width: 198px;
                                  height: auto;
                                  margin: 0 auto;
                                  border: 0;
                                  outline: 0;
                                  line-height: 100%;
                                  -ms-interpolation-mode: bicubic;
                                  vertical-align: top;
                                " />
                                                    </a>
                                                    <img src="https://api-postcards.designmodo.com/tracking/mail/promo?uid=MzA5Njgw"
                                                        width="1" height="1" alt=""
                                                        style="display: none; width: 1px; height: 1px;" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
` }