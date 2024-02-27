import React from 'react'
import '../globals.css'
import { useNavigate } from 'react-router-dom'

export default function TaskViewModal() {
	const navigate = useNavigate()

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
					</form>

					<div className="footer">
						<button type="submit" className="submit-btn">
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
