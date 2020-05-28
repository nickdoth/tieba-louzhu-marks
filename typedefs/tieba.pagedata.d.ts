declare namespace Tieba.PageDataTypes {
    interface PageData {
        page:               string;
        product:            string;
        tbs:                string;
        can_post:           number;
        can_anonym_post:    number;
        forum_type:         number;
        follow_sign:        string;
        forward_sign:       string;
        power:              Power;
        is_thread_admin:    number;
        is_posts_admin:     number;
        staticDomain:       string;
        charset:            string;
        user:               User;
        search_what:        string;
        forum:              Forum;
        thread:             Thread;
        post_perm:          PostPerm;
        special:            Special;
        isPicBa:            string;
        pager:              Pager;
        tbs_loaded:         boolean;
        searchFixed:        string;
        is_sign_in:         number;
        is_star:            number;
        sign_forum_info:    SignForumInfoClass;
        memberTitle:        string;
        memberNumber:       string;
        is_activity_sign:   string;
        annualMemberMode:   boolean;
        pbVoiceLoaded:      boolean;
        lcs:                Lcs;
        userBarExtraConfig: UserBarExtraConfig;
    }

    interface Forum {
        id:                   string;
        forum_id:             string;
        name:                 string;
        forum_name:           string;
        name_url:             string;
        name_encode:          string;
        member_name_url:      string;
        first_class:          string;
        second_class:         string;
        album_good_smallflow: string;
        avatar:               string;
        forbid_flag:          string;
        has_picture_frs:      string;
        member_count:         string;
        member_name:          string;
        post_num:             string;
        shield_post:          string;
        sign_in_info:         SignInInfo;
    }

    interface SignInInfo {
        user_info:  { [key: string]: number };
        forum_info: SignForumInfoClass;
    }

    interface SignForumInfoClass {
        is_on:               boolean;
        is_filter:           boolean;
        forum_info:          SignForumInfoForumInfo;
        current_rank_info:   RankInfo;
        level_1_dir_name:    string;
        level_2_dir_name:    string;
        yesterday_rank_info: RankInfo;
        weekly_rank_info:    RankInfo;
        monthly_rank_info:   RankInfo;
    }

    interface RankInfo {
        sign_count:   number;
        member_count: number;
        sign_rank:    number;
        dir_rate?:    string;
    }

    interface SignForumInfoForumInfo {
        forum_id:         number;
        level_1_dir_name: string;
    }

    interface Lcs {
        sbduss: string;
    }

    interface Pager {
        cur_page:   number;
        total_page: number;
    }

    interface PostPerm {
        img_num:    number;
        video_num:  number;
        smiley_num: number;
        white_list: string[];
    }

    interface Power {
        can_add_celebrity:               boolean;
        can_add_manager_team:            boolean;
        can_bws_FDS:                     boolean;
        can_bws_bawu_center:             boolean;
        can_bws_bawu_info:               boolean;
        can_bws_bawu_log:                boolean;
        can_bws_filter_ip_tbs:           boolean;
        can_bws_limit_bawu_log:          boolean;
        can_cancel_mask_delete:          boolean;
        can_cancel_mask_good:            boolean;
        can_cancel_mask_top:             boolean;
        can_del_manager_team:            boolean;
        can_edit_bakan:                  boolean;
        can_edit_daquan:                 boolean;
        can_edit_gconforum:              boolean;
        can_filter_id:                   boolean;
        can_filter_ip:                   boolean;
        can_mask_delete:                 boolean;
        can_mask_good:                   boolean;
        can_mask_top:                    boolean;
        can_member_top:                  boolean;
        can_op_FDS:                      boolean;
        can_op_as_4thmgr:                boolean;
        can_op_as_broadcast_admin:       boolean;
        can_op_as_category_editor:       boolean;
        can_op_as_editor:                boolean;
        can_op_as_entertainment_manager: boolean;
        can_op_as_operator:              boolean;
        can_op_as_profession_manager:    boolean;
        can_op_as_vertical_operator:     boolean;
        can_op_common_bawu:              boolean;
        can_op_disk:                     boolean;
        can_op_frsbg:                    boolean;
        can_op_good_class:               boolean;
        can_op_pic:                      boolean;
        can_op_topic:                    boolean;
        can_op_video:                    boolean;
        can_op_wise_group:               boolean;
        can_paper_ignore_vcode:          boolean;
        can_pass_media_limit:            boolean;
        can_post:                        boolean;
        can_post_frs:                    boolean;
        can_post_pb:                     boolean;
        can_send_memo:                   boolean;
        can_super:                       boolean;
        can_tobe_assist:                 boolean;
        can_tobe_editor:                 boolean;
        can_tobe_manager:                boolean;
        can_tobe_pri_content_assist:     boolean;
        can_tobe_pri_manage_assist:      boolean;
        can_toms_operator_alt_basic:     boolean;
        can_toms_operator_basic:         boolean;
        can_type1_audit_post:            boolean;
        can_type2_audit_post:            boolean;
        can_type3_audit_post:            boolean;
        can_type4_audit_post:            boolean;
        can_type5_audit_post:            boolean;
        can_unknown:                     boolean;
        can_view_freq:                   boolean;
        can_vip_jubao:                   boolean;
        can_vote:                        boolean;
        forever_ban:                     number;
        lz_del:                          boolean;
        picasso:                         boolean;
        share_forum_perm:                any[];
        can_set_topic:                   boolean;
        reply_private_flag:              number;
    }

    interface Special {
        has_sub_post:       number;
        has_grade:          number;
        has_lucky_lottery:  number;
        has_basket_lottery: number;
        has_ssq_lottery:    number;
        has_foot_lottery:   number;
        is_match_news:      number;
        lz_only:            number;
        has_lz_only:        number;
        is_from_spider:     boolean;
    }

    interface Thread {
        author:      string;
        thread_id:   number;
        title:       string;
        reply_num:   number;
        thread_type: string;
        topic:       Topic;
        is_ad:       number;
        video_url:   string;
    }

    interface Topic {
        is_topic:     boolean;
        topic_type:   boolean;
        is_live_post: boolean;
        is_lpost:     boolean;
        lpost_type:   number;
    }

    interface User {
        id:            string;
        user_id:       string;
        name:          string;
        user_name:     string;
        user_nickname: string;
        name_url:      string;
        no_un:         number;
        is_login:      number;
        portrait:      string;
        balv:          Balv;
        Parr_props:    ParrProps;
        Parr_scores:   ParrScores;
        mParr_props:   any[];
        vipInfo:       null;
        new_iconinfo:  NewIconinfo;
        power:         Balv;
        bg_id:         string;
        cur_score:     string;
        email:         string;
        feedNumNew:    string;
        free_flag:     string;
        is_black:      number;
        is_block:      number;
        is_half_user:  number;
        is_like:       number;
        is_tenyear:    number;
        itieba_id:     string;
        level_id:      string;
        level_name:    string;
        meizhi_level:  number;
        mobile:        string;
        mobilephone:   string;
        name_link:     string;
        name_show:     string;
        name_weak:     string;
        open_uid:      number;
        score_card:    string;
        score_left:    string;
        sid:           string;
        source_id:     string;
        start_time:    string;
        superboy:      string;
        use_sig:       number;
        user_sex:      number;
        user_status:   number;
        user_type:     number;
        userhide:      number;
        picasso:       string;
        global:        Global;
        rank:          null;
        tbguess_card:  null;
        tips:          any[];
        urank:         any[];
        forbidden:     any[];
        joinEmoji:     string;
    }

    interface ParrProps {
        all_level: null;
    }

    interface ParrScores {
        i_money:      number;
        i_other:      number;
        i_total:      number;
        level:        number;
        limit:        number;
        scores_fetch: number;
        scores_money: number;
        scores_other: number;
        scores_total: number;
        update_time:  number;
    }

    interface Balv {
    }

    interface Global {
        tbmall_newprops: number;
    }

    interface NewIconinfo {
        "1": The1;
    }

    interface The1 {
        slot_no:     string;
        slot_type:   string;
        icon:        string;
        value:       string;
        end_time:    string;
        name:        string;
        level:       string;
        weight:      number;
        position:    Position;
        terminal:    Terminal;
        sprite:      { [key: string]: string };
        category_id: number;
        type:        number;
        price:       number;
        is_force:    number;
        is_advanced: number;
        title:       string;
        title_url:   string;
        intro:       string;
        intro_url:   string;
        forum_list:  string;
        pay_pic_pc:  string;
        pay_pic_pad: string;
        level_1:     Level;
        level_2:     Level;
        level_3:     Level;
        level_4:     Level;
        level_5:     Level;
        level_6:     Level;
    }

    interface Level {
        icon_3:     string;
        icon_2:     string;
        icon_1:     string;
        icon_5:     string;
        icon_4:     string;
        icon_6:     string;
        level_info: LevelInfo;
    }

    interface LevelInfo {
        title:       string;
        title_url:   string;
        intro:       string;
        intro_url:   string;
        forum_list:  string;
        pay_pic_pc:  string;
        pay_pic_pad: string;
    }

    interface Position {
        frs:  number;
        pb:   number;
        home: number;
        card: number;
    }

    interface Terminal {
        pc:     number;
        wap:    number;
        client: number;
    }

    interface UserBarExtraConfig {
        switch: string;
        word:   string;
        url:    string;
    }
}