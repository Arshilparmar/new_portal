import React from 'react';
import Layout from './Layout';
import Features from '../Features';
import './Video.css';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <>
    <div>
      <Layout></Layout>
    </div>
    <div className='player'>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=Dz0R8ZtMnFk'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=8bpq3j4adXg'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=YDvsBbKfLPA'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=MqmimkQvuT4'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=XrWFLR1vXdY'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=AkiLP4wuEVw'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=KHSI-p0ZL5s'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=QJbvOtx5K24'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=AVvZNRDAPyY'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=SsnbZOTgKYw'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=sdzRk2Lbf9o'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=g7UR5ZT6KEM'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=U6BX3Ama6Lg'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=XISu-ocLvuc'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=Nrue2ScBgmk'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=8sLlO4qbL-k'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=6TkSeca30VQ'/>
      <ReactPlayer className='player1' url='https://www.youtube.com/watch?v=lzRnfB2CWA'/>
    </div>

   

    <div>
        <Features></Features>
    </div>
    </>
  );
}
export default Video
