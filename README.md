# Trellora Web
The project manages tasks easily for everyone
<br><a href="https://trellora-web.vercel.app/">Live View</a>

### Key word
- Hot reload

### Git command
- git status
- git add .
- git commit -m"Message here" (git commit -a -m"Message here" | git commit --amend)
- git push origin <branch name> (git push origin <branch name> -f)
- git pull origin <branch name> (fetch and merge)
- git checkout -b <new branch name>
- git branch
- git branch -d
- git log
- git diff

### Git workflow
1. Get task id is 123
2. Checkout dev and pull the latest code
3. Coding -> Review
4. Prepare to create pull request: 
- git add . 
- -> git stash 
- -> git pull origin dev 
- -> git stash pop 
- -> git checkout -b new-branch-name 
- -> git commit -m"[123] Message here"
- -> git push origin new-branch-name
5. Wait for reviewing
6. Have feedbacks -> Update code -> git add . -> git commit --amend -> git push origin new-branch-name -f


### Status code
- 200: Ok
- 201: Created
- 400: Bad request
- 401: Unauthorize
- 403: Forbidden
- 404: Not found
- 500: Internal Server Error
- 502: Bad Gate

### 3 things should check when call api error
- Check url
- Check data: Content-Type, Token, Payload
- Check response message
