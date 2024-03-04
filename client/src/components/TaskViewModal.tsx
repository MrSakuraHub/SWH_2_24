import React, { useState } from 'react'
import '../globals.css'
import { useNavigate } from 'react-router-dom'

export default function TaskViewModal() {
	const navigate = useNavigate()

	const [selectedFile, setSelectedFile] = React.useState<File>()
	const [errorMsg, setErrorMsg] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		if (event.target.files.length > 0) {
			setSelectedFile(event.target.files[0])
		}
	}

	const validateSelectedFile = () => {
		const MIN_FILE_SIZE = 0 // 1MB
		const MAX_FILE_SIZE = 10240 // 10MB
		const validExt = ['png', 'jpeg', 'jpg']
		const fileType = selectedFile?.type.split('/')[1]

		if (!selectedFile) {
			setErrorMsg('Please choose a file')
			setIsSuccess(false)
			return
		}

		if (fileType && !validExt.includes(fileType)) {
			setErrorMsg('Please select proper file format')
			setIsSuccess(false)
			return
		}

		const fileSizeKiloBytes = selectedFile.size / 1024

		if (fileSizeKiloBytes < MIN_FILE_SIZE) {
			setErrorMsg('File size is less than minimum limit')
			setIsSuccess(false)
			return
		}
		if (fileSizeKiloBytes > MAX_FILE_SIZE) {
			setErrorMsg('File size is greater than maximum limit')
			setIsSuccess(false)
			return
		}

		setErrorMsg('')

		// server api

		setIsSuccess(true)
	}

	return (
		<>
			<div className="modalBackground">
				<div className="modalContainer">
					<div className="titleCloseBtn"></div>
					<div className="title">
						<h1>Task Details</h1>
					</div>
					<div className="body">
						<p>Detailed Task Description</p>
					</div>

					<form>
						<div className="input-group">
							<label htmlFor="comment">Suggested Comment</label>
							<input type="text" id="comment" />
						</div>
						<div className="input-group">
							<label htmlFor="price">Suggested Price</label>
							<input type="number" id="price" />
						</div>

						<input
							type="file"
							name="file"
							onChange={handleFileChange}
						/>

						<div>
							<p className="info-message">Min size: 1MB</p>
							<p className="info-message">Max size: 5MB</p>
						</div>
						{isSuccess ? (
							<p className="success-message">
								Submitted successful
							</p>
						) : null}
						<p className="error-message">{errorMsg}</p>
					</form>

					<div className="footer">
						<button
							type="submit"
							className="submit-btn"
							onClick={validateSelectedFile}
						>
							Submit
						</button>
						<button
							className="back-btn"
							onClick={() => navigate(-1)}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
