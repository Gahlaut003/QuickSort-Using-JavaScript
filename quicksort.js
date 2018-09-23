function quicksort(arr,left,right)
{
  var len=arr.length,pivot,partitionIndex;
  if(left < right)
  {
    pivot=right;
    partitionIndex=partition(arr,pivot,left,right);
    quicksort(arr,left,partitionIndex-1);
    quicksort(arr,partitionIndex+1,right);
  }
  return arr;
}
function partition(arr,pivot,left,right)
{
var pivotValue=arr[pivot],
partitionIndex=left;
for(var i=left;i<right;i++)
{
  if(arr[i]<pivotValue)
  {
swap(arr,i,partitionIndex);
partitionIndex++;

  }
}
  swap(arr,right,partitionIndex);
  return partitionIndex;
}
function swap(arr,i,j)
{
  var temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
  console.log(arr);
}
quicksort([11,8,14,3,6,2,7],0,6);
