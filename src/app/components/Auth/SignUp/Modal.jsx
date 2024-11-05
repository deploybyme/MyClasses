import React from 'react'
import UserRegister from './UserRegister'
export default function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title px-3" id="exampleModalLabel">
            Register Student
          </h5>
          <button type="button" className="btn-close px-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <UserRegister/>
        </div>
      </div>
    </div>
  </div>
  )
}
