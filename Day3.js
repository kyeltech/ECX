function vowel_counter(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcounter = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcounter += 1;
    }
  
  }
  return vcounter;
}
console.log(vowel_counter("The quick brown fox is here"));
