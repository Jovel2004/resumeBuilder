
import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoChevronBackCircleSharp } from "react-icons/io5";



function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5 ' style={{ marginTop: '-80px' }}><IoChevronBackCircleSharp />Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Review At : 3/12/2004,9:44:21 AM</h6>
                <button className='btn text-danger fs-4'><RiDeleteBin5Fill /></button>
              </div>
              <div className="border rounded p-3">
                <img width={'200px'} height={'200px'} src="https://website.cdn.novoresume.com/static/resume-templates/hybrid-resume-template.png?auto=format&fit=max&w=1920&q=80" alt="resume" />

              </div>
            </Paper>
          </div>

          


        </div>
      </Box>
    </div>
  )
}

export default History