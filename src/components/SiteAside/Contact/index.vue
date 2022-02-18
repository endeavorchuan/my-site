<template>
    <ul class="contact-container">
        <li>
            <a href="https://github.com/endeavorchuan">
                <div class="icon github">
                    <Icon type="github" />
                </div>
                <span>endeavorchuan</span>
            </a>
        </li>
        <li>
            <a href="mailto:chc82347794@163.com">
                <div class="icon mail">
                  <Icon type="mail" />
                </div>
                <span>chc82347794@163.com</span>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=773589599&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon qq">
                    <Icon type="qq" />
                </div>
                <span>773589599</span>
            </a>
        </li>
        <li>
          <a>
            <div class="icon weixin">
              <Icon type="weixin" />
            </div>
            <span>chc18845632858</span>
          </a>
          <div class="pop">
            <img src="https://pic.imgdb.cn/item/61fe7c5b2ab3f51d91bb6c1b.jpg">
          </div>
        </li>
    </ul>
</template>

<script>
    import Icon from "@/components/Icon"
    export default {
        components: {
            Icon
        },
    }
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    .contact-container {
        list-style: none;
        padding: 20px;
        margin: 0;
        color: @gray;
        @itemHeight: 30px;
        li {
            height: 30px;
            line-height: 30px;
            margin: 14px 0;
            cursor: pointer;
            position: relative;
            &:hover {
                .pop {
                    transform: scaleY(1);
                }
            }
        }
        a {
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        .icon {
            font-size: 26px;
            width: 36px;
        }
        .pop {
            position: absolute;
            left: 0;
            bottom: @itemHeight + 5px;
            padding: 10px 15px;
            background: #fff;
            border-radius: 5px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            img {
                width: 150px;
                height: 150px;
            }
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: #fff;
                bottom: -4px;
            }
        }

    }
</style>