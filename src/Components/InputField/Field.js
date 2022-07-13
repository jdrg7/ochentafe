const Field = (
    {
        name = "",
        labelText = "",
        type = "text",
        value = "",
        onChange = ()=>{},
        ...rest
      }
) => {
    return (
     <fieldset>
         <label htmlFor="">Email</label>
         <input type="email" name="" id="" value="" onChange=""/>
     </fieldset>
    );
  }
  export default Field;