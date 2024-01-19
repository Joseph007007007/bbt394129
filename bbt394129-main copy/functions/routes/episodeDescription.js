const bbt = require('big-bang-theory');
const check = new Boolean(false);


const episodeDescription = (req, res) => {
 for(let i = 0; i <279; i++) {
   if(bbt._embedded.episodes[i].summary.includes(req.params.index)) {
     res.status(200).json({
       success: true,
       index: req.params.index,
       data:bbt._embedded.episodes[i],
     });
     check = true;
   }  
 }
 if(check == false){
   res.status(200).json({
     success: false,
     index: req.params.index,
     message: "Index not in any description"
   })
 }




}


module.exports = episodeDescription;

