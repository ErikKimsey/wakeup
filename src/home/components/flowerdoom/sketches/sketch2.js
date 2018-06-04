export default function Rose(p){

    let rebirthing = false, rectStroke = 0, points = 5;
    let d = 8;
    let n = 6;
    let c = 0;
    let sliderD;
    let sliderN;
    let k = n/d;
    let fr = 30;
    let yep = false;
    let rotationSpeed = 0;
    let rectDim = 2;
    let parentW = document.querySelector(".sketch-container").clientWidth;
    let parentH = document.querySelector(".sketch-container").clientHeight;
    // window.addEventListener("resize", updateCanvasDimensions);

    const updateCanvasDimensions = function(){
        console.log("resizing canvas");
        console.log("parent W: ", parentW);
        
        p.resizeCanvas(parentW, parentH);
        p.draw();
    };

    const boolSwap = function(){
        return yep = !yep;
    };

    const rebirthNnD = function(){
        d = getRandomInt(4,9);
        n = getRandomInt(3,6);
        rebirthing = true;
    };

    const calcFrameRateChange = function(){
        fr = 22;
        if(fr >= 30){
            fr = fr - 0.1;
        }

        if(fr < 5) {
            fr = fr + 0.1;
        }

        return fr;
    };

    const nChange = function(y){
        if (n > 0 && n < 8){
            if (y == true) {
                n += 0.2;
            } else {
                n -= 0.2;
            }
        } else {
            rebirthNnD();
        }
    
        return n;
    };

    const dChange = function(y){
        if(d > 0 && d < 10){
            if (y == true) {
                d += 0.2;
            } else {
                d -= 0.6;
            }
        } else {
            rebirthNnD();
        }
        return d;
    };

    const calcKChange = function(f){
        if(f%2000 != 0){
            let y = boolSwap();
                d = dChange(y);
                n = nChange(y);
            }
            k = n / d;
            return k;
    }

    const getKChange = function(f){
        return calcKChange(f);
    }

    const getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const changeColor = function(){
        if(c < 255){
            c += 0.5
        } else {
            c = 1;
        }
        return c;
    };

    const rotateSpeed = function(){
        rotationSpeed = rotationSpeed + p.PI / 3.0;
        
        return rotationSpeed;
    };

    ///////////////////////////////////////////////////////////////
    //REBIRTH
    ///////
    ///////
    
    const shrinkRect = function(){
    ///////
        if (rectDim >= 2478) {
            tripRebirthing();
            rectDim = 2;
        }
        rectDim = rectDim + 1;
        
        return rectDim;
    };
    ///////
    ///////
    ///////
    const tripRebirthing = function(){
        rebirthing = false;
    }

    const shrinkStroke = function(){
        if (rectStroke >= 33){
            rectStroke = 0;
        }
        rectStroke = rectStroke + p.cos();
        return rectStroke;
    };

    const star = function(x, y, radius1, radius2, npoints) {
        let angle = p.TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        p.beginShape();
        for (let a = 0; a < p.TWO_PI; a += angle) {
            let sx = x + p.cos(a) * radius2;
            let sy = y + p.sin(a) * radius2;
            p.vertex(sx, sy);
            sx = x + p.cos(a + halfAngle) * radius1;
            sy = y + p.sin(a + halfAngle) * radius1;
            p.vertex(sx, sy);
        }
        p.endShape(p.CLOSE);
    }

    const changePoints = function(){
        
        if(points > 100){
            points = 5
        }
        
        points = points + 0.07;
        return points;
    }
    //
    //
    // END REBITH
    ///////////////////////////////////////////////////////////////

    p.setup = function(){
        p.createCanvas(parentW, parentH);
        const intrvl = setInterval(rebirthNnD, 10000);
    }

    p.draw = function(){
        window.addEventListener("resize", updateCanvasDimensions);
        parentW = document.querySelector(".sketch-container").clientWidth;
        parentH = document.querySelector(".sketch-container").clientHeight;
        let from = p.color('rgba(111,111,111,0.4)');
        let to = p.color('rgba(199,30,70,0.7)');
        let intra = p.color(0,0,0);
        let colur = changeColor();
        let f = p.frameCount;
        let strokeSize = shrinkStroke();
            p.frameRate(20);
            p.translate(parentW/(2), parentH/2);
            p.rotate(f / 50.0);
            p.background(intra);
            p.stroke('rgba(199,30,70,0.7)');
            p.strokeWeight(1);
            p.beginShape();
            p.noFill();
            for(let a = 0; a < p.TWO_PI*8; a +=0.01){
                let r = 177 * p.cos(k*a);
                let x = r * p.cos(a);
                let y = r * p.sin(a);
                p.vertex(x,y);
            }
            k = getKChange();
            p.endShape();
           
            p.noFill();
            p.frameRate(100);
            p.strokeWeight(7);
            p.stroke('rgba(111,111,111,0.3)');
            p.rotate(f/28.0);
            star(shrinkRect()/-2222, shrinkRect()/-2224, shrinkRect(), shrinkRect()/8, (changePoints()));
    }
    


}