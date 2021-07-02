Cái project này được tạo ra để tự học Git thôi.
Chả có cái vẹo gì đâu :)
*** git init
    git status
    git add tênfile
    git commit -m 'mô tả'

*** git log + git show
    git log
    git show + id log
    git diff

*** git status => git restore +ten file  để hoàn tác(restore) lại file trước khi chỉnh sửa.
    git reset HEAD +tenfile để hoàn tác git add 

*** git checkout -b tenbranch : tự động tạo mới branch và checkout sang branch mới.
    git checkout tenbranch : switch branch
    git merge : check out sang branch A , git merge B
    A <--- B
    git branch -D tenbranch : xóa branch

*** git reset --soft IDcommit : trở về trạng thái chưa commit
    git reset --mixed IDcommit: trở về trạng thái chưa commit, chưa add.

*** npm init  : tạo ra 1 file pakage.json để lưu những thông tin về proj cũng như các dependencies ().
    npm install teenDependencies --save: để cài đặt dependencies . --save để lưu vào package.json, sau này máy khác chỉ cần gõ : npm install là sẽ tự động cài các dependencies trong package.json
    .gitignore: tạo file .gitignore để lưu tên các file các thư mục không cần commit, bằng cách lưu tên file hoặc thư mục vào trong đó

*** Sử dụng github: 
    git remote add origin linkGit : liene ket voi GitHub
    git push -u origin tenBranchTrenGitHub: lần đầu tiên
    git push
    git clone linkTrenGitHub : clone code về
    git pull : pull các thay đổi về

*** Git push a branch:
    git checkout -b tenBranch: tạo branch mới
    code chán chê mê mỏi đi rồi add -> commit
    git push origin tenBranch: tạo mới branch trên GitHub và push code lên đó.

*** Pull request trên github:
    Tạo mới pull request:
    check changed and review: Review changes
    Chú ý Branch trên git và git hub

*** git fetch origin tenBranch : để fetch code từ branch đó về test
    git checkout tenBranch: sau đó test.
