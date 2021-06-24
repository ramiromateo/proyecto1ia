const express = require('express');
const router = express.Router();


var nodesExplored = 0;
function copiarvector(vector){
    return  JSON.parse(JSON.stringify(vector));
}
function canPlay(board,player,i,j){
        
        if(board[i][j] != 0) return false;

        var mi , mj , c;
        var oplayer = ((player == 1) ? 2 : 1);

        //move up
        mi = i - 1;
        mj = j;
        c = 0;
        while(mi>0 && board[mi][mj] == oplayer){
            mi--;
            c++;
        }
        if(mi>=0 && board[mi][mj] == player && c>0) return true;


        //move down
        mi = i + 1;
        mj = j;
        c = 0;
        while(mi<7 && board[mi][mj] == oplayer){
            mi++;
            c++;
        }
        if(mi<=7 && board[mi][mj] == player && c>0) return true;

        //move left
        mi = i;
        mj = j - 1;
        c = 0;
        while(mj>0 && board[mi][mj] == oplayer){
            mj--;
            c++;
        }
        if(mj>=0 && board[mi][mj] == player && c>0) return true;

        //move right
        mi = i;
        mj = j + 1;
        c = 0;
        while(mj<7 && board[mi][mj] == oplayer){
            mj++;
            c++;
        }
        if(mj<=7 && board[mi][mj] == player && c>0) return true;

        //move up left
        mi = i - 1;
        mj = j - 1;
        c = 0;
        while(mi>0 && mj>0 && board[mi][mj] == oplayer){
            mi--;
            mj--;
            c++;
        }
        if(mi>=0 && mj>=0 && board[mi][mj] == player && c>0) return true;

        //move up right
        mi = i - 1;
        mj = j + 1;
        c = 0;
        while(mi>0 && mj<7 && board[mi][mj] == oplayer){
            mi--;
            mj++;
            c++;
        }
        if(mi>=0 && mj<=7 && board[mi][mj] == player && c>0) return true;

        //move down left
        mi = i + 1;
        mj = j - 1;
        c = 0;
        while(mi<7 && mj>0 && board[mi][mj] == oplayer){
            mi++;
            mj--;
            c++;
        }
        if(mi<=7 && mj>=0 && board[mi][mj] == player && c>0) return true;

        //move down right
        mi = i + 1;
        mj = j + 1;
        c = 0;
        while(mi<7 && mj<7 && board[mi][mj] == oplayer){
            mi++;
            mj++;
            c++;
        }
        if(mi<=7 && mj<=7 && board[mi][mj] == player && c>0) return true;

        
        return false;
}

function getAllPossibleMoves(board,player){
    var result = [];
    for (var i = 0; i < 8; i++) {

        for (var j = 0; j < 8; j++) {
            
            if(canPlay(board,player,i,j)){
                
                result.push({x:i,y:j});
            }
        }
    }
    return result;
}

function getReversePoints(board,player,i,j){

        var allReversePoints = [];

        var mi , mj , c;
        var oplayer = ((player == 1) ? 2 : 1);

        //move up
        var mupts = [];
        mi = i - 1;
        mj = j;
        while(mi>0 && board[mi][mj] == oplayer){
            mupts.push({x:mi,y:mj});
            mi--;
        }
        if(mi>=0 && board[mi][mj] == player && mupts.length>0){
            allReversePoints=copiarvector (mupts);
        }


        //move down
        var mdpts = [];
        mi = i + 1;
        mj = j;
        while(mi<7 && board[mi][mj] == oplayer){
            mdpts.push({x:mi,y:mj});
            mi++;
        }
        if(mi<=7 && board[mi][mj] == player && mdpts.length>0){
            allReversePoints=copiarvector (mdpts);
        }

        //move left
        var mlpts = [];
        mi = i;
        mj = j - 1;
        while(mj>0 && board[mi][mj] == oplayer){
            mlpts.push({x:mi,y:mj});
            mj--;
        }
        if(mj>=0 && board[mi][mj] == player && mlpts.length>0){
            allReversePoints=copiarvector (mlpts);
        }

        //move right
        var mrpts = [];
        mi = i;
        mj = j + 1;
        while(mj<7 && board[mi][mj] == oplayer){
            mrpts.push({x:mi,y:mj});
            mj++;
        }
        if(mj<=7 && board[mi][mj] == player && mrpts.length>0){
            allReversePoints=copiarvector (mrpts);
        }

        //move up left
        var mulpts = [];
        mi = i - 1;
        mj = j - 1;
        while(mi>0 && mj>0 && board[mi][mj] == oplayer){
            mulpts.push({x:mi,y:mj});
            mi--;
            mj--;
        }
        if(mi>=0 && mj>=0 && board[mi][mj] == player && mulpts.length>0){
            allReversePoints=copiarvector (mulpts);
        }

        //move up right
        var murpts = [];
        mi = i - 1;
        mj = j + 1;
        while(mi>0 && mj<7 && board[mi][mj] == oplayer){
            murpts.push({x:mi,y:mj});
            mi--;
            mj++;
        }
        if(mi>=0 && mj<=7 && board[mi][mj] == player && murpts.length>0){
            allReversePoints=copiarvector (murpts);
        }

        //move down left
        var mdlpts = [];
        mi = i + 1;
        mj = j - 1;
        while(mi<7 && mj>0 && board[mi][mj] == oplayer){
            mdlpts.push({x:mi,y:mj});
            mi++;
            mj--;
        }
        if(mi<=7 && mj>=0 && board[mi][mj] == player && mdlpts.length>0){
            allReversePoints=copiarvector (mdlpts);
        }

        //move down right
        var mdrpts = [];
        mi = i + 1;
        mj = j + 1;
        while(mi<7 && mj<7 && board[mi][mj] == oplayer){
            mdrpts.push({x:mi,y:mj});
            mi++;
            mj++;
        }
        if(mi<=7 && mj<=7 && board[mi][mj] == player && mdrpts.length>0){
            allReversePoints=copiarvector (mdrpts);
        }

        return allReversePoints;
    }

    
function getNewBoardAfterMove(board,move ,player){
    
    var newboard = copiarvector(board);
    
    newboard[move.x][move.y] = player;
    //reverse pieces
    var rev = getReversePoints(newboard,player,move.x,move.y);
    for (var i = 0; i < rev.length; i++){
        newboard[rev[i].x][rev[i].y] = player;
    }

    return newboard;
}

function hasAnyMoves( board, player){
    return getAllPossibleMoves(board,player).length > 0;
}

function isGameFinished(board){
   return !(hasAnyMoves(board,1) || hasAnyMoves(board,2));
}

function getPlayerStoneCount( board, player){
    var score = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if(board[i][j] == player) score++;
        }
    }
    return score;
}

function evalDiscDiff(board , player){
    var oplayer = (player==1) ? 2 : 1;

    var mySC = getPlayerStoneCount(board,player);
    var opSC = getPlayerStoneCount(board,oplayer);

    return 100 * (mySC - opSC) / (mySC + opSC);
}

function getTotalStoneCount(board){
    var c = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if(board[i][j] != 0) c++;
        }
    }
    return c;
}

function getGamePhase( board){
    var sc =getTotalStoneCount(board);
    if(sc<20) return 0;
    else if(sc<=58) return 1;
    else return 2;
}
function evalCorner( board ,  player){
    var oplayer = (player==1) ? 2 : 1;

    var myCorners = 0;
    var opCorners = 0;

    if(board[0][0]==player) myCorners++;
    if(board[7][0]==player) myCorners++;
    if(board[0][7]==player) myCorners++;
    if(board[7][7]==player) myCorners++;

    if(board[0][0]==oplayer) opCorners++;
    if(board[7][0]==oplayer) opCorners++;
    if(board[0][7]==oplayer) opCorners++;
    if(board[7][7]==oplayer) opCorners++;

    return 100 * (myCorners - opCorners) / (myCorners + opCorners + 1);
}
function evalMobility( board , player){
    var oplayer = (player==1) ? 2 : 1;

    var myMoveCount = getAllPossibleMoves(board,player).length;
    var opMoveCount = getAllPossibleMoves(board,oplayer).length;

    return 100 * (myMoveCount - opMoveCount) / (myMoveCount + opMoveCount + 1);
}
function evalParity(board){
    var remDiscs = 64 - getTotalStoneCount(board);
    return remDiscs % 2 == 0 ? -1 : 1;
}
function eval(board , player){

    //terminal
    if(isGameFinished(board)){
        return 1000*evalDiscDiff(board, player);
    }

    //semi-terminal
    switch (getGamePhase(board)){
        case 0:
            return 1000*evalCorner(board,player) + 50*evalMobility(board,player);
        case 1:
            return 1000*evalCorner(board,player) + 20*evalMobility(board,player) + 10*evalDiscDiff(board, player) + 100*evalParity(board);
        case 2:
        default:
            return 1000*evalCorner(board,player) + 100*evalMobility(board,player) + 500*evalDiscDiff(board, player) + 500*evalParity(board);
    }
}
    
function MMAB(node,player,depth,max,alpha,beta){
    nodesExplored++;
    
    if(depth == 0 || isGameFinished(node)){
        
        return eval(node,player);
    }
     
    var oplayer = (player==1) ? 2 : 1;
    
    if((max && !hasAnyMoves(node,player)) || (!max && !hasAnyMoves(node,oplayer))){
        
        return MMAB(node,player,depth-1,!max,alpha,beta);
    }
    var score;
    if(max){
        //maximizing
        score = Number.MIN_VALUE;
        var posiciones=getAllPossibleMoves(node,player);
        for(var iii=0;iii<posiciones.length; iii++){ //my turn
            
            var newNode = getNewBoardAfterMove(node,posiciones[iii],player);
            
            var childScore = MMAB(newNode,player,depth-1,false,alpha,beta);
            if(childScore > score) score = childScore;
            
            if(score > alpha) alpha = score;
            if(beta <= alpha) break; //Beta Cutoff
        }
    }else{
        
        score = Number.MAX_VALUE;
        var posiciones=getAllPossibleMoves(node,oplayer);
        for(var iii=0;iii<posiciones.length; iii++){ //opponent turn
        
            var newNode = getNewBoardAfterMove(node,posiciones[iii],oplayer);
        
            var childScore = MMAB(newNode,player,depth-1,true,alpha,beta);
            if(childScore < score) score = childScore;
        
            if(score < beta) beta = score;
            if(beta <= alpha) break; //Alpha Cutoff
        }
    }
    return score;
}
function solve(board, player,depth){

    
    nodesExplored = 0;
    var bestScore = Number.MIN_VALUE;
    var bestMove = {x:-1,y:-1};

    var posibleMoves=getAllPossibleMoves(board,player);
    console.log(posibleMoves.length)
    for (var i = 0; i < posibleMoves.length; i++){
        var newNode = getNewBoardAfterMove(board,posibleMoves[i],player);
        
        var childScore = MMAB(newNode,player,depth-1,false,Number.MIN_VALUE,Number.MAX_VALUE);
        if(childScore > bestScore) {
            bestScore = childScore;
            bestMove = posibleMoves[i];
        }
    }
    
    return bestMove;
}
function readBoard(estado,turno){
    var tablero = [
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2] ]
    
    for (var i = 0; i < 8; i++) {

        for (var j = 0; j < 8; j++) {
            tablero[i][j]=((parseInt(estado.charAt(i*8+j), 10) == 2) ? 0 :parseInt(estado.charAt(i*8+j), 10) + 1) ;
        }
    }
    var ocupados=1+Math.round((64-getTotalStoneCount(board))/8);

    console.log(tablero);
    var punto=solve(tablero,parseInt(turno, 10)+1,ocupados);
    return "".concat(punto.x).concat(punto.y);
    
}


//Get all Users
router.get('/valor',(req,res)=>{
  const turno = req.query.turno;
  const estado=req.query.estado;
  
  const respuesta=readBoard(estado,turno);
  res.send(respuesta)
});


module.exports = router;
//web: node index.js
