import Cookies from 'js-cookie';


export default class CookieMonster {
    constructor(){
        this.cookieName='hadTreatment';
        this.cookieVal = '';
    }

    initCookie() {
        // console.log(this.getCookie());
        
        // if (this.getCookie() == '') {
            this.setCookie('true');
        // } else {
        //     this.cookieVal = '';
        // }
    }

    setCookie(cv) {
        console.log("cv is : ", cv);
        this.cookieVal = cv;
        Cookies.set(this.cookieName, this.cookieVal, { expires: 7 });
    }

    getCookie() {
        console.log("get cookies returns: ",Cookies.get(this.cookieVal));
        return Cookies.get(this.cookieName);
    }

}