function tinhGiaiThua(n){
    if(n<2) return 1;
    return n*tinhGiaiThua(n-1);
}