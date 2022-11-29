import React from 'react'

export const List = (props) => {

    const {onItemSelect , items , textProp , valueProp , selectedItem}  = props

  return (
    <div>

        <ul>
            {items.map(item => <li className={item === selectedItem ?  'li-normal  pagination-active': "li-normal"} onClick={() => onItemSelect(item)} key={item[valueProp]}>{item[textProp]}</li>)}
        </ul>

    </div>
  )

}


List.defaultProps ={
    textProp:"name",
    valueProp:"id"
}
