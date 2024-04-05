document.getElementById('postDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const postData = {};
    formData.forEach((value, key) => {
        postData[key] = value;
    });

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(response => {
            console.log('Data posted:', response.data);
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
});

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        const firstPostId = response.data[0].id;

        axios.patch(`https://jsonplaceholder.typicode.com/posts/${firstPostId}`, {
            title: 'Updated Title',
            body: 'Updated Body'
        })
        .then(response => {
            console.log('First post updated:', response.data);
        })
        .catch(error => {
            console.error('Error updating first post:', error);
        });

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'New Post',
            body: 'New Body',
            userId: 1
        })
        .then(response => {
            console.log('New post added:', response.data);
        })
        .catch(error => {
            console.error('Error adding new post:', error);
        });

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${firstPostId}`)
        .then(response => {
            console.log('First post deleted:', response.data);
        })
        .catch(error => {
            console.error('Error deleting first post:', error);
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });