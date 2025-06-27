---
title: nextjs项目 弹窗 密码校验 form表单提交
shortTitle: next 弹窗 密码校验 form表单提交
image: 
icon: pen-to-square
date: 2025-06-27
order: 13
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---




```js
"use client";

import { addSubAccount } from "@/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { addSubAccountModalAtom, subAccountDataAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { type FormEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { validateFormData } from "./validata";

export function AddModal() {
  const router = useRouter();
  const t = useTranslations("");
  const translate = useTranslations("users.platform");

  const formRef = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useAtom(addSubAccountModalAtom);

  const subAccountData = useAtomValue(subAccountDataAtom);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validataResult = await validateFormData(formData, "create");
    if (validataResult.success) {
      const reqParams = {
        userName: formData.get("userName") as string,
        password: formData.get("password") as string,
        remark: formData.get("remark") as string,
      };

      setIsLoading(true);

      const { code, message } = await addSubAccount(reqParams);

      setIsLoading(false);
      if (code === 0) {
        toast.success(translate("actionSuccess"));
        setOpen(false);
        router.refresh();
      } else {
        toast.error(message);
      }
    } else {
      toast.error(validataResult.errors?.[0]?.message);
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {translate("addSubAccount")}
            <DialogDescription />
          </DialogTitle>
        </DialogHeader>
        <Form action="" ref={formRef} onSubmit={handleSubmit} autoFocus>
          <input type="hidden" name="id" value={subAccountData?.userId} />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Label className="w-24 shrink-0 text-right text-muted-foreground">
                {translate("account")}
              </Label>
              <Input
                placeholder={t("placeholder")}
                className="flex-1"
                name="userName"
                defaultValue={subAccountData?.username}
                maxLength={20}
              />
            </div>

            <div className="flex items-center gap-4">
              <Label className="w-24 shrink-0 text-right text-muted-foreground">
                {translate("password")}
              </Label>
              <Password
                type="password"
                placeholder={t("placeholder")}
                className="flex-1"
                name="password"
              />
            </div>

            <div className="flex items-center gap-4">
              <Label className="w-24 shrink-0 text-right text-muted-foreground">
                {translate("confirmPassword")}
              </Label>
              <Password
                type="password"
                placeholder={t("placeholder")}
                className="flex-1"
                name="confirmPassword"
              />
            </div>
          </div>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{t("cancel")}</Button>
          </DialogClose>
          <Button
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              if (formRef.current) {
                formRef.current.requestSubmit();
              }
            }}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            {t("confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


```




2. zod表单校验

```js

import { passwordSchema, usernameSchema } from "@/lib/validata";
import { z } from "zod";
import { zfd } from "zod-form-data";

// 创建模式的表单schema
const createFormSchema = zfd
  .formData({
    userName: zfd.text(usernameSchema),
    password: zfd.text(passwordSchema),
    confirmPassword: zfd.text(z.string().nullish()),
    roleList: zfd.repeatableOfType(z.string()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

const editFormSchema = zfd
  .formData({
    password: zfd.text(
      z
        .union([
          passwordSchema,
          z
            .string()
            .length(0), // 允许空字符串
        ])
        .optional(),
    ),
    confirmPassword: zfd.text(
      z
        .union([
          passwordSchema,
          z
            .string()
            .length(0), // 允许空字符串
        ])
        .optional(),
    ),
    remark: zfd.text(z.string().optional()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

// 验证函数
export async function validateFormData(formData: FormData, mode = "create") {
  try {
    const schema = mode === "create" ? createFormSchema : editFormSchema;
    const result = await schema.parse(formData);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors,
      };
    }
    return {
      success: false,
      errors: [{ path: "form", message: "验证失败" }],
    };
  }
}


```