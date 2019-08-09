/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-09 07:30:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `groupId` int(11) NOT NULL AUTO_INCREMENT,
  `groupName` varchar(255) NOT NULL,
  `groupPersonNum` int(255) NOT NULL,
  `declaration` varchar(255) DEFAULT NULL,
  `leaderUserName` varchar(255) NOT NULL,
  `groupIcon` varchar(255) NOT NULL,
  PRIMARY KEY (`groupId`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES ('1003', '沐恩小组', '20', '一家人~', '沐恩', 'http://img0.imgtn.bdimg.com/it/u=2240033465,1427047201&fm=26&gp=0.jpg');
INSERT INTO `group` VALUES ('1004', '祷告小组', '10', '我们,一起祷告吧~', '沐恩红光', 'http://img0.imgtn.bdimg.com/it/u=2240033465,1427047201&fm=26&gp=0.jpg');
INSERT INTO `group` VALUES ('1005', '查经小组', '10', '我们一起看圣经吧~', '沐恩红光', 'http://img0.imgtn.bdimg.com/it/u=2240033465,1427047201&fm=26&gp=0.jpg');
INSERT INTO `group` VALUES ('1006', '音乐小组', '10', '我们一起唱诗吧~', '沐恩红光', 'http://img0.imgtn.bdimg.com/it/u=2240033465,1427047201&fm=26&gp=0.jpg');
