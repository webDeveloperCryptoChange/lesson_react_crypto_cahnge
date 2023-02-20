import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

function FormPost ({create}) {
    const [post, setPost] = useState({title: "", body: ""})

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post
        }

        create(newPost);

        setPost({title: "", body: ""});
    }

    return(
        <div>
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>Title name</FormLabel>
                    <FormControl value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="title name"/>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Text post</FormLabel>
                    <FormControl value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="text post"/>
                </FormGroup>

                <Button onClick={addPost}>add post</Button>
            </Form>
        </div>
    )
}

export default FormPost