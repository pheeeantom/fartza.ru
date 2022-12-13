import CurrencyInput from 'react-currency-input-field';

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
];

class GoodsCreateForm extends React.Component {
	constructor(props) {
		super(props);
		this.updateImageDisplay = this.updateImageDisplay.bind(this);
		this.validFileType = this.validFileType.bind(this);
		this.returnFileSize = this.returnFileSize.bind(this);
		this.load = this.load.bind(this);
		this.inputName = this.inputName.bind(this);
		this.state = {first: true, errorName: false, errorDesc: false}
	}
	validFileType(file) {
	  for(var i = 0; i < fileTypes.length; i++) {
	    if(file.type === fileTypes[i]) {
	      return true;
	    }
	  }

	  return false;
	}
	returnFileSize(number) {
	  if(number < 1024) {
	    return number + 'bytes';
	  } else if(number > 1024 && number < 1048576) {
	    return (number/1024).toFixed(1) + 'KB';
	  } else if(number > 1048576) {
	    return (number/1048576).toFixed(1) + 'MB';
	  }
	}
	load(img) {
		//console.log(img);
		img.nextSibling.textContent += ', ширина и высота: ' + img.width + 'x' + img.height;
	}
	updateImageDisplay(event) {
		console.log("upd");

		var input = document.querySelector('#images');
		var preview = document.querySelector('.preview');

		while(preview.firstChild) {
		    preview.removeChild(preview.firstChild);
		}

		var curFiles = input.files;
		if(curFiles.length === 0) {
			var para = document.createElement('p');
			para.textContent = '';
			preview.appendChild(para);
		} else if (curFiles.length > 3) {
			input.value = '';
			var para = document.createElement('small');
			para.classList.add("form-text");
			para.classList.add("text-danger");
			para.textContent = 'Слишком много файлов!';
			preview.appendChild(para);
		} else {
			var list = document.createElement('ol');
			preview.appendChild(list);
			var para = [null, null, null];
			var image = [null, null, null];
			var listItem = [null, null, null];
			for(var i = 0; i < curFiles.length; i++) {
				listItem[i] = document.createElement('li');
				para[i] = document.createElement('p');
				para[i].style.display = 'inline-block';
				para[i].style.width = "80%";
				if(this.validFileType(curFiles[i])) {
					//console.log(curFiles[i]);
					image[i] = document.createElement('img');
					image[i].style.display = 'inline-block';
					image[i].style.width = "20%";
					image[i].src = window.URL.createObjectURL(curFiles[i]);

					listItem[i].appendChild(image[i]);
					para[i].textContent = 'Имя файла: ' + curFiles[i].name + ', размер файла: ' + this.returnFileSize(curFiles[i].size);
					image[i].onload = (event) => this.load(event.target);
					listItem[i].appendChild(para[i]);

				} else {
					para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Неверный формат файла, выберите файлы заново';
					listItem[i].appendChild(para[i][i]);
				}

				list.appendChild(listItem[i]);
			}
		}
	}
	inputName(event) {
		if (event.target.value.length > 127 || event.target.value.length < 3) {
			this.setState({errorName: true});
		}
		else {
			this.setState({errorName: false});
		}
	}
	render() {
		let className = "form-text text-danger";
		if (!this.state.errorName) {
			className += " d-none";
		}
		return (
			<div>
				<div className="col-md-3 col-lg-4" style={{float: 'left'}}>&nbsp;</div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{float: 'left'}}>
					<h2 style={{textAlign: 'center'}}>Создать товар</h2>
					<form action="/api" method="post" autoComplete="off">
						<div className="mb-3">
						  <label for="name" className="form-label">Название</label>
						  <textarea className="form-control" id="name" rows="2" onInput={this.inputName}></textarea>
						  <small className={className}>Слишком короткое или слишком длинное название!</small>
						</div>
						<div className="mb-3">
						  <label for="description" className="form-label">Более подробное описание</label>
						  <textarea className="form-control" id="description" rows="3"></textarea>
						</div>
						<div className="mb-3">
						  <label for="images" className="form-label">Загрузить изображения...</label>
						  <input title="" className="form-control" type="file" id="images" onChange={this.updateImageDisplay} accept=".jpg, .jpeg, .png" multiple/>
						</div>
						<div className="preview">
							<p></p>
						</div>
						<div class="mb-3">
						  <label for="price" class="form-label">Цена в рублях</label>
						  <CurrencyInput
						    id="input-example"
						    name="input-name"
						    placeholder="Please enter a number"
						    defaultValue={1000}
						    decimalsLimit={2}
						    onValueChange={(value, name) => console.log(value, name)}
						  />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <GoodsCreateForm />,
  document.getElementById('goods-create')
);