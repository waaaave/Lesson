function showDetail(id) {
	layer.open({
		type: 2
		,title: '详情'
		,content: baseURL+'modules/student/replenishmentDe.html?id='+id
		,maxmin: true
		,offset: 't'
		,area: ['100%', '100%']
		,btn: ['关闭']
		,success: function (index) {

		}
		,btn1: function(index, layero){
			//var body = layer.getChildFrame('body',index);//建立父子联系【核心】
			//var iframeWin = window[layero.find('iframe')[0]['name']];//【核心】
			layer.close(index);//手动关闭弹出层
		}
		,end:function () {
			//vm.reload();
		}
	});
}
function submitApply(id) {
	var lock = false;
	layer.confirm('确定要提交选中的记录？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		if(!lock) {
			lock = true;
			$.ajax({
				url: baseURL +"student/replenishment/submitReplenishment/"+id,
				type: "POST",
				contentType: "application/json",
				data: { },
				success: function (data) {
					if (data.code==0){
						layer.msg("操作成功", {icon: 1});
						$("#jqGrid").trigger("reloadGrid");
					}else{
						layer.alert(data.msg);
					}
				}
			});
		}
	}, function(){
	});
}


$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'student/replenishment/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 50, key: true },
			{ label: '编号', name: 'number', index: 'number', width: 50 },
			{ label: '品种', name: 'product', index: 'product', width: 80 },
			{ label: '合同号', name: 'contractNumber', index: 'contract_number', width: 70 },
			{ label: '总货权', name: 'totalCargoRights', index: 'total_cargo_rights', width: 70 },
			{ label: '已发数量', name: 'issuedNum', index: 'issued_num', width: 70 },
			{ label: '待发数量', name: 'readyNum', index: 'ready_num', width: 70 },
			{ label: '补货吨位', name: 'numReplenishmentTonnage', index: 'num_replenishment_tonnage', width: 80 },
			{ label: '补货日期', name: 'replenishmentDate', index: 'replenishment_date', width: 150 },
			{ label: '补货后余量', name: 'numReplenishmentMargin', index: 'num_replenishment_margin', width: 90 },
			{ label: '总发运吨位', name: 'totalTonnage', index: 'total_tonnage', width: 90 },
			{ label: '车数', name: 'vehiclesNumber', index: 'vehicles_number', width: 50 },
			{ label: '状态', name: 'state', index: 'state', width: 80, formatter:function (val) {
					switch(val){
						case -1: return "已打回待重新提交";break;
						case 0 : return "草稿";break;
						case 1 : return "审核中";break;
						case 2 : return "审核通过";break;
						case 3 : return "调度室执行";break;
						case 4 : return "补货执行完成";break;
						default:break;
					}
				}},
			{ label: '备注', name: 'memo', index: 'memo', width: 150 },
			{ label: '补货通知责任人', name: 'createBy', index: 'create_by', width: 120 },
			{ label: '补货创建时间', name: 'createTime', index: 'create_time', width: 150 },
			//{ label: '补货修改人', name: 'updateByOne', index: 'update_by_one', width: 150 },
			//{ label: '补货修改时间', name: 'updateTimeOne', index: 'update_time_one', width: 150 },
			{ label: '执行补货吨位', name: 'doNumReplenishmentTonnage', index: 'do_num_replenishment_tonnage', width: 120 },
			{ label: '补货执行日期', name: 'doReplenishmentDate', index: 'do_replenishment_date', width: 150 },
			{ label: '发货地', name: 'deliveryPlace', index: 'delivery_place', width: 80 },
			{ label: '系统录入人员', name: 'systemEntryPerson', index: 'system_entry_person', width: 120 },
			{ label: '现场核查人', name: 'onSiteInspector', index: 'on_site_inspector', width: 90 },
			{ label: '已补货吨位', name: 'didReplenishmentTonnage', index: 'did_replenishment_tonnage', width: 100 },
			//{ label: '执行补货修改人', name: 'updateByTwo', index: 'update_by_two', width: 150 },
			//{ label: '执行补货修改时间', name: 'updateTimeTwo', index: 'update_time_two', width: 150 },
			{ label: '流程实例ID', name: 'processInstanceId', index: 'process_instance_id', width: 90 },
			{ label: '操作', name: 'state', index: 'state', width: 200 ,formatter: function (value, grid, rows) {
					btns="<a href=\"#\" class='btn btn-primary btn-xs' onclick=\"showDetail(" + rows.id + ")\">详情</a>";
					// btns="<a href=\"#\" class='btn btn-primary btn-xs' onclick=\"showDetail(" + rows.id + ","+rows.taskId+","+rows.processDefineId+")\">详情</a>";
					switch (value) {
						case -1:return btns;break;
						case 0:return btns+="&nbsp;<a href=\"#\" class='btn btn-primary btn-xs' onclick=\"submitApply(" + rows.id + ")\">提交审核</a>";break;
						default:return btns+="&nbsp;<a href=\"#\" class='btn btn-primary btn-xs' onclick=\"Export(" + rows.id + ")\">导出EXCEL表格</a>";break;

					}
				}}      ],
		viewrecords: true,
		height: 385,
		rowNum: 10,
		rowList : [10,30,50],
		rownumbers: true,
		rownumWidth: 25,
		autowidth:true,
		shrinkToFit:false,
		forceFit:true,
		autoScroll: true,
		multiselect: true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
            page:"page", 
            rows:"limit", 
            order: "order"
        },
        gridComplete:function(){
        	//隐藏grid底部滚动条
        	//$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "scroll" });
        }
    });
});

var vm = new Vue({
	el:'#rrapp',
	data:{
		showList: true,
		title: null,
		replenishment: {},
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.replenishment = {};
		},
		update: function (event) {
			var id = getSelectedRow();
			if(id == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            
            vm.getInfo(id)
		},
		saveOrUpdate: function (event) {
		    $('#btnSaveOrUpdate').button('loading').delay(1000).queue(function() {
                var url = vm.replenishment.id == null ? "student/replenishment/save" : "student/replenishment/update";
                $.ajax({
                    type: "POST",
                    url: baseURL + url,
                    contentType: "application/json",
                    data: JSON.stringify(vm.replenishment),
                    success: function(r){
                        if(r.code === 0){
                             layer.msg("操作成功", {icon: 1});
                             vm.reload();
                             $('#btnSaveOrUpdate').button('reset');
                             $('#btnSaveOrUpdate').dequeue();
                        }else{
                            layer.alert(r.msg);
                            $('#btnSaveOrUpdate').button('reset');
                            $('#btnSaveOrUpdate').dequeue();
                        }
                    }
                });
			});
		},
		del: function (event) {
			var ids = getSelectedRows();
			if(ids == null){
				return ;
			}
			var lock = false;
            layer.confirm('确定要删除选中的记录？', {
                btn: ['确定','取消'] //按钮
            }, function(){
               if(!lock) {
                    lock = true;
		            $.ajax({
                        type: "POST",
                        url: baseURL + "student/replenishment/delete",
                        contentType: "application/json",
                        data: JSON.stringify(ids),
                        success: function(r){
                            if(r.code == 0){
                                layer.msg("操作成功", {icon: 1});
                                $("#jqGrid").trigger("reloadGrid");
                            }else{
                                layer.alert(r.msg);
                            }
                        }
				    });
			    }
             }, function(){
             });
		},
		getInfo: function(id){
			$.get(baseURL + "student/replenishment/info/"+id, function(r){
                vm.replenishment = r.replenishment;
            });
		},
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
                page:page
            }).trigger("reloadGrid");
		},

		submitReplenishment:function (id) {
			console(id);
		}
	}
});