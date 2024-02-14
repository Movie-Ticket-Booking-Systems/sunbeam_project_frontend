export default function AddMovie(props) {
    return (
        <div className='container-fluid'>
            <div className='row text-start'>
                <div className='col w-50 '>
                    <div class="form-group mb-4">
                        <label for="moviename">Movie Name</label>
                        <input type="text" class="form-control" id="moviename" name="movieName" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div class="form-group mb-4">
                        <label for="duration">Duration</label>
                        <input type="number" class="form-control" id="duration" aria-describedby="durationhelp" name="duration" onChange={props.OnTextChanged} placeholder="" />
                        <small id="durationhelp" class="form-text text-muted">Enter the duration in mins</small>
                    </div>
                    <div class="form-group mb-4">
                        <label for="genre">Genre</label>
                        <select class="form-control" id="genre" name="genre" onChange={props.OnTextChanged}>
                            <option>DRAMA</option>
                            <option>THRILLER</option>
                            <option>ACTION</option>
                            <option>ROMANTIC</option>
                            <option>COMEDY</option>
                            <option>HISTORICAL</option>
                            <option>ANIMATION</option>
                            <option>SPORTS</option>
                            <option>SOCIAL</option>
                            <option>WAR</option>
                        </select>
                    </div>

                </div>
                <div className='col w-50'>

                    <div class="form-group mb-4">
                        <label for="ReleaseDate">ReleaseDate</label>
                        <input type="date" class="form-control" id="ReleaseDate" min="1" max="10" name="releaseDate" onChange={props.OnTextChanged} placeholder="" />
                    </div>                                    <div class="form-group mb-4">
                        <label for="rating">Rating</label>
                        <input type="number" class="form-control" id="rating" aria-describedby="ratinghelp" name="rating" onChange={props.OnTextChanged} min="1" max="10" placeholder="" />
                        <small id="ratinghelp" class="form-text text-muted">Range 1 - 10</small>
                    </div>
                    <div class="form-group mb-5">
                        <label for="language">Language</label>
                        <select class="form-control" id="language" name="language" onChange={props.OnTextChanged}>
                            <option>HINDI</option>
                            <option>ENGLISH</option>
                            <option>TELUGU</option>
                            <option>TAMIL</option>
                            <option>MARATHI</option>
                            <option>PUNJAB</option>
                            <option>KANNADA</option>
                        </select>
                    </div>
                    <div className="text-end">
                        <button className='btn btn-success'
                            onClick={props.AddRecord}>
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </div>)
};