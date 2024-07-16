import pizza from '../images/pizza.png'
import burger from '../images/burger.png'
import coca from '../images/coca.png'
import icecream from '../images/icecream.png'
import icecream1 from '../images/icecream1.png'
import kebad from '../images/kebab.png'
import salad from '../images/salad.png'
import water from '../images/water.png'


export function getData(){
    return[
        {title:"Pizza", price:120 ,Image:pizza,id:1},
        {title:"Burger", price:100 ,Image:burger,id:2},
        {title:"Coca", price:90 ,Image:coca , id:3 },
        {title:"Ice-Cream", price:40 ,Image: icecream ,id:4},
        {title:"Ice-Cream", price:60,Image: icecream1,id:5},
        {title:"kebad", price:140 ,Image:kebad,id:6},
        {title:"Salad", price:150 ,Image:salad ,id:7},
        {title:"Water Bottol", price:30 ,Image:water,id:8},
    ]
}