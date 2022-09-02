import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {countIncrease, increase} from './../store'
import {useMemo, memo, useEffect } from 'react'
let Child = memo(function(){
  return <div>child</div>
})
function 함수(){
  return <div>반복문10억번돌린결과</div>
}

function Cart(){
    let result = useMemo(()=>{ return 함수() }, [])
    let a = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let list = a.cart;
    
    // list 변환방법
    
    useEffect(()=>{
      // 1) list
      // concat, filter, find, filter+indexOf(중복제거), Set(중복제거),
      const convertList = list.concat({id : 4, name : 'Honey', count : 2});
      console.log(convertList,'convertList');
      // const result = list.filter((v) => v.count > 2)
      const index = list.filter((v,i) => list.indexOf(v) === i)
      let result1 = [...new Set(list)];
      console.log(list,result1,'index');
      // const honey = list.find((x)=>x.name = 'Honey')
      // 2) string 
      // slice, join
      let cardValidPeriod = '0202';
      cardValidPeriod = [
        cardValidPeriod.slice(0, 2),
        cardValidPeriod.slice(2, 4)
      ].join("/")
    })
    
    return (
        <div>
          <Child/>
            <h6>{a.user.name} {a.user.age}의 장바구니</h6>
            <button onClick={()=>{dispatch(increase())}}>button</button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>     
                </tr>
            </thead>
            {
            a.cart.map(function(item, i){
              return(
                  <tbody key={i}>
                  <tr>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                      <button onClick={()=>{
                          dispatch(countIncrease(i))
                      }}> + </button>
                  </td>
                  </tr>
                  </tbody>
              )
            })
          }
            </Table> 
        </div>
    )
}
export default Cart