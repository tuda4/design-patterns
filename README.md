﻿# design-patterns
# design-patterns
Push or pull strategies
 - Pull base là đối tượng con sẽ gửi request đến đối tượng cha và đối tượng cha return về data, đối tượng con sẽ quyết định khi nào thì pull data về, áp dụng cho trường hợp thằng con có nhiều thằng cha.
 - Push base là đối tượng cha sẽ chủ động gửi data về cho đối tượng con, đối tượng cha chủ động quyêt định việc gửi data mà không cần request từ đối tượng con, áp dụng cho trường hợp thằng cha này có nhiều thằng con sub.
