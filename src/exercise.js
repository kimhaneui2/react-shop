function Test() {

    let result = [
        {id : 0, name : 'White and Black', count : 2,},
        {id : 1, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'Grey', count : 1},
        {id : 3, name : 'Yordan', count : 1}
    ];
    console.log(result,'result');
    return(
        <div>
        <h4>최근검색</h4>
        <ul>
          {
           result.map(function(item){
            return(
              <li>{item}</li>
            )
          })
          }
          </ul>
      </div>
    )
}

export default Test