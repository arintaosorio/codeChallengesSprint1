function findShortestOfThreeWords(Word1,Word2,Word3) {
	var lng1 = Word1.length;
	var lng2 = Word2.length;
	var lng3 = Word3.length;
	if(lng1 <= lng2 && lng1 <= lng3){
		return Word1;
	} else if (lng2 < lng1 && lng2<= lng3){
		return Word2;
	}
	return Word3
}

findShortestOfThreeWords('muebleria','pizarron','descanso')