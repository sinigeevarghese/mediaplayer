import React, { useEffect, useState } from 'react'
import {Col, Row} from 'react-bootstrap'
import VideoCard from './VideoCard'
import {getVideoApi,AllCategoryApi,UpdateCategoryApi} from '../services/allApi'


function View({addStatus,setDragStatus}) {

  const [VideoDetails, setvideoDetails] = useState([])
  const [deleteVideoStatus ,setDeleteVideoStatus] = useState([])

  const getvideo = async()=>{
   const result = await getVideoApi()
   //console.log(result.data);
   setvideoDetails(result.data)

  }
  const DragOver =(e)=>{
    e.preventDefault()
  }
const videoDrop = async(e)=>{
  const {videoId ,categoryId} =JSON.parse(e.dataTransfer.getData("datashared"))
  console.log(videoId,categoryId);
  // get all category
  const {data} = await AllCategoryApi()
  console.log(data);
  // get selected category
   const selectedCategory = data.find((item)=>item.id==categoryId)
  console.log(selectedCategory);
  // remove video from the selected category
  const result= selectedCategory.allVideo.filter((item)=>item.id!=videoId)

  const reqBody ={
    CategoryName:selectedCategory.CategoryName,
    allVideo:result,
    id:selectedCategory.id
  }
  await UpdateCategoryApi(categoryId,reqBody)
  setDragStatus(true)


}






  useEffect(()=>{
    getvideo()

  },[addStatus,deleteVideoStatus])
  console.log(VideoDetails);



  return (
    <Row className='w-100 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>


      {VideoDetails?.length>0?
      VideoDetails.map((item)=>(
        <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
     
     
      <VideoCard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus} />
     
      </Col>))
      

      
      :
<p className='text-warning fs-5 mt-4'>No Video Yet Uploaded...</p>}

      
    </Row>
  )
}

export default View