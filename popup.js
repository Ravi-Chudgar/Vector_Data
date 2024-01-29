window.onload=function(){
    document.getElementById('uploadFile').addEventListener('click', function() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
  
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
  
            fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
        if (data.success) {
          alert('File uploaded successfully!');
        } else {
          alert(`Error: ${data.message}`);
        }
        })
        .catch(error => alert(`Error: ${error}`));
        } else {
        alert('Please choose a file to upload.');
        }
    });
}