// 
// TODO
// 
// Change this class to a 

export default class CookieMonster {
    constructor() {
        this.hasVisited = false;
        this.lastVisited;
        this.firstVisit;
        this.expirationDate;
        this.expired = false;
        this.daysToExpire;
        this.todaysDate;
        this.days = 30;
    }



    hasUserVisited() {
        console.log("in userhasvisted");

        if (this.getVisited() == false) {
            this.setVisited(true);
            console.log("Has note shad OddTreatment!");
            this.createFirstVisitDate();
        } else if (this.getVisited() == true) {
            // 1. Check expiration
            // 2. If expired...clear cookies
            return console.log("Has had OddTreatment!");
        }
    }

    getVisited() {
        return this.hasVisited;
    }

    setVisited(b) {
        this.hasVisited = b;
        console.log(this.hasVisited);

    }
    // TODO:
    // - Find today's date,
    // - Find "expires",
    // - If "expires" == today:
    // ------ Clear "expires",
    // ------ Create new "expires"
    // ------ return "true"
    // - Else:
    // ------return "false"
    // getExpired(){

    // }

    // // Swap bool values for this.expired
    // setExpired(bool){
    //     this.expired = bool;
    // }

    createFirstVisitDate() {
        this.firstVisit = Date.now();
        this.firstVisit = this.firstVisit.getDate;
        this.createHasVisitedCookie(this.days);
    }

    createHasVisitedCookie(days) {
        if (days && days > 0) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            this.expirationDate = "; expires=" + date.toGMTString();
        }
        // else var expires = "";
        document.cookie = "visited=" + this.hasVisited + this.expirationDate + "; path=/";
    }

}