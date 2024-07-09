import React from 'react'

export default function DeleteProduct() {
  return (
    <div>
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Delete</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="confirm-delete-modal">
    <div className="modal-content">
      <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
      <div className="modal-actions">
        <button className="btn btn-cancel">Hủy</button>
        <button className="btn btn-confirm">Xóa</button>
      </div>
    </div>
  </div>
</>
    </div>
  )
}
