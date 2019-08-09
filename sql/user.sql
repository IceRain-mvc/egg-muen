/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-09 07:30:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `realName` varchar(255) NOT NULL,
  `userType` int(11) NOT NULL DEFAULT '3',
  `phoneNum` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `userIcon` varchar(255) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  `groupId` int(11) DEFAULT '-1',
  `sign` varchar(255) DEFAULT NULL,
  `token` text,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('12', 'mumu', '121212', '3', '13000000000', 'aaa', 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 11:42:14', '1003', null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im11bXUiLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTU2NTIyMDkxNSwiZXhwIjoxNTk2NzU2OTE1fQ.P7adrxWoHYlxA9gfbuJaQklEqivMziaagZy5YzU6V64', '5b1140edbfea9e729f2f68fb4df30b933a660d6b5871600716940f43428cdb48');
INSERT INTO `user` VALUES ('13', '沐沐2', '沐', '3', '13000000000', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:36:44', '1004', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('15', '沐沐3', '小丽', '3', '13000000000', '天堂', 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:36:51', '1003', null, null, '2a4c93c06ed354b23e56d22c3ba0c883614ab80d1ae7e51efce40d7152598e95');
INSERT INTO `user` VALUES ('16', '沐沐4', '嗯嗯', '3', '13000000000', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:36:57', '-1', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('17', '沐沐5', '秀秀', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:01', '1003', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('18', '沐沐6', '媛媛', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:03', '1004', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('19', '沐沐7', '艳艳', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:06', '-1', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('20', '沐沐8', '啦啦', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:11', '1005', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('21', '沐沐9', '嘿嘿', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:15', '1005', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('22', '沐沐10', '沐沐恩', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:18', '-1', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('23', '沐恩绿叶', '绿叶', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:22', '1006', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('24', '沐恩小黑', '沐沐恩', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-07 18:37:25', '1006', null, null, '96e3f07ae3fe831426a6d6b5b4cf724d7adfec19ef48a035fb1efbeceadf2a88');
INSERT INTO `user` VALUES ('26', '沐恩白光', '白光', '3', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-08 15:58:44', '1005', null, null, 'a991d2b44dceb3a6b63b743cd90d0834f6fadc62c43f9a86eb8b80e5373f9af4');
INSERT INTO `user` VALUES ('27', '沐恩红光', '红光', '2', '15555555555', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-08 16:04:34', '1004', null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IjExMTExMSIsInBhc3N3b3JkIjoiMTExMTExIiwiaWF0IjoxNTY1MzA1NzgxLCJleHAiOjE1OTY4NDE3ODF9.5FIWE5O46e2kbURFlPg6eyBQVTrJAVWgqMx77GGd908', '2b719251dc0e447e75310167af2a63b952ae9f7b11ec20be1f7d709abba18d2e');
INSERT INTO `user` VALUES ('28', '沐恩', '沐沐恩', '1', '110', null, 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg', '2019-08-09 07:19:43', '1003', null, null, '87ea9faac6644fea60d0b9caf42ed4f32019b14d6954750b98e82e4b964fd6fe');
