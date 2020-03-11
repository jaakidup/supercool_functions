function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD

    let split = userDate.split("/");
    let date = split[2]  + split[0].padStart(2, "0") + split[1].padStart(2, "0")
    return date



    
}
  
  console.log(formatDate("12/31/2014"));





  let tester = "jaaki".indexOf("i");
  console.log(tester);