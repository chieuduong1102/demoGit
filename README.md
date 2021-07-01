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